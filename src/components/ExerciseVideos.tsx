import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useVideos from '../hooks/useVideos';
import {
  Center,
  Text,
  Spinner,
  SimpleGrid,
  Heading,
  Box,
  Card,
  CardBody,
  Divider,
  Link,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Pagination from './Pagination';

const ExerciseVideos = () => {
  const [searchParams] = useSearchParams();
  const exerciseName = searchParams.get('exerciseName')!;
  const target = searchParams.get('target')!;
  const { data, isLoading } = useVideos(`${target} ${exerciseName}`);

  const [page, setPage] = useState(1);

  const videos = data?.contents.slice((page - 1) * 2, page * 2);

  return (
    <Box mt={[8, 10, 12, 24]}>
      <Heading
        mb={['16px', '20px', '24px', '32px']}
        bgGradient={'linear(to-r, #2B6CB0, #90CDF4)'}
        bgClip="text"
      >
        Watch {exerciseName} exercise videos
      </Heading>
      {isLoading && (
        <Center paddingY={'128px'}>
          <Spinner size={'xl'} />
        </Center>
      )}

      <SimpleGrid columns={[1, 1, 2, 2]} spacing={[3, 4, 5, 6]}>
        {videos?.map(({ video }, index) =>
          video ? (
            <Card
              key={index}
              cursor={'pointer'}
              _hover={{
                transform: 'scale(1.03)',
                transition: 'transform .15s ease-in',
                boxShadow: 'lg',
              }}
              boxShadow={'md'}
              borderRadius={10}
              overflow={'hidden'}
            >
              <iframe
                height={'350px'}
                src={`https://www.youtube.com/embed/${video.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                allowFullScreen
              ></iframe>
              <CardBody>
                <Link
                  href="https://chakra-ui.com"
                  isExternal
                  paddingTop={[3, 4, 5, 5]}
                  textTransform={'uppercase'}
                  fontSize={['sm', 'md', 'lg', 'lg']}
                  fontWeight={{ base: 600, md: 700 }}
                >
                  {video.title}
                </Link>
                <Divider mt={[1, 2, 3, 3]} />
                <HStack
                  gap={'lg'}
                  alignItems={'start'}
                  justifyContent={'space-between'}
                  paddingTop={[2, 2, 3, 3]}
                >
                  <Text>{video.channelName}</Text>
                  <VStack>
                    <Text whiteSpace={'nowrap'}>{video.viewCountText}</Text>
                    <Text whiteSpace={'nowrap'}>{video.publishedTimeText}</Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          ) : null
        )}
      </SimpleGrid>
      <Pagination
        page={page}
        onPage={(number: number) => setPage(p => p + number)}
        hasNextPage={page < 10}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default ExerciseVideos;
