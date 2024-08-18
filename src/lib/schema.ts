import { z } from 'zod';

export const schemaContactUs = z
	.object({
		firstName: z.string({
			required_error: 'First Name is Required'
		}),
		lastName: z.string({
			required_error: 'Last Name is Required'
		}),
		email: z
			.string({
				required_error: 'Email is Required'
			})
			.email({
				message: 'Email is Invalid'
			}),
		phone: z
			.string({
				required_error: 'Phone Number is Required'
			})
			.regex(/(^08)(\d{3,4}-?){2}\d{2,3}$/, 'Phone Number is Invalid'),
		subject: z.string({
			required_error: 'Subject is Required'
		}),
		message: z.string({
			required_error: 'Message is Required'
		})
	})
	.required();
