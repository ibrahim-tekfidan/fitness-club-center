import { Center, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return (
    <Center>
      <Text color="tomato" fontSize={['lg', 'xl', '2xl']}>
        {children}
      </Text>
    </Center>
  );
};

export default ErrorMessage;
