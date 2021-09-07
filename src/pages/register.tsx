// React
import React from 'react';

// Formik
import { Form, Formik } from 'formik';

// Chakra
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

// Components
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
	return (
		<Wrapper variant="small">
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={values => {
					console.log(values);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField
							name="username"
							placeholder="username"
							label="Username"
							isLoading={isSubmitting}
						/>
						<Box mt={4}>
							<InputField
								name="password"
								placeholder="password"
								label="Password"
								type="password"
								isLoading={isSubmitting}
							/>
						</Box>
						<Button
							w="full"
							mt={4}
							colorScheme="teal"
							isLoading={isSubmitting}
							type="submit"
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default Register;
