import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
	app.post(
		'/rooms/:roomId/questions',
		{
			schema: {
				params: z.object({
					roomId: z.string(),
				}),
				body: z.object({
					question: z.string().min(1),
				}),
			},
		},
		async (req, reply) => {
			const { roomId } = req.params;
			const { question } = req.body;

			const result = await db
				.insert(schema.questions)
				.values({
					roomId,
					question,
				})
				.returning();

			const createdQuestion = result[0];

			if (!createdQuestion) {
				throw new Error('Failed to create new question.');
			}

			// biome-ignore lint/style/noMagicNumbers: <Development>
			return reply.status(201).send({ questionId: createdQuestion.id });
		}
	);
};
