import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
	app.post(
		'/rooms',
		{
			schema: {
				body: z.object({
					name: z.string().min(1),
					description: z.string().optional(),
				}),
			},
		},
		async (req, reply) => {
			const { name, description } = req.body;

			const result = await db
				.insert(schema.rooms)
				.values({
					name,
					description,
				})
				.returning();

			const createdRoom = result[0];

			if (!createdRoom) {
				throw new Error('Failed to create new room.');
			}

			// biome-ignore lint/style/noMagicNumbers: <Development>
			return reply.status(201).send({ roomId: createdRoom.id });
		}
	);
};
