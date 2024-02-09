import { Badge } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  color: string;
  children: ReactNode;
}

const CategoryBadge = ({ color, children }: Props) => {
  return (
    <Badge
      paddingX={2}
      borderRadius={6}
      colorScheme={color}
      whiteSpace={'wrap'}
    >
      {children}
    </Badge>
  );
};

export default CategoryBadge;
