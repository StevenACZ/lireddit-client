// React
import React, { InputHTMLAttributes } from 'react';

// Formik
import { useField } from 'formik';

// Chakra
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	placeholder: string;
	name: string;
	isLoading: boolean;
};

export const InputField: React.FC<InputFieldProps> = props => {
	const [field, { error }] = useField(props);

	return (
		<FormControl isInvalid={!!error} isDisabled={props.isLoading}>
			<FormLabel htmlFor={field.name}>{props.label}</FormLabel>
			<Input {...field} id={field.name} placeholder={props.placeholder} />
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
