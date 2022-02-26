import React from 'react';
import { useContext, useEffect } from 'react';
import { GetUserDetails, clearDetails } from '../actions';
import { UserContext } from '../context';
import { Text, Box, VStack, HStack, Spinner, Heading } from 'native-base';

const Details = ({ route }) => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await GetUserDetails(route.params.id));
    };
    resolveAction();
    return () => {
      dispatch(clearDetails());
    };
  }, []);

  if (state.details.id)
    return (
      <VStack style={{ margin: 10 }}>
        <HStack
          style={{
            margin: 5,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 2 }}>
            Name:
          </Text>
          <Text>{state.details.name}</Text>
        </HStack>
        <HStack
          style={{
            margin: 5,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 2 }}>
            Email:
          </Text>
          <Text>{state.details.email}</Text>
        </HStack>
        <HStack
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            margin: 5,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 2 }}>
            Phone:
          </Text>
          <Text>{state.details.phone}</Text>
        </HStack>
        <HStack
          style={{
            margin: 5,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 2 }}>
            Website:
          </Text>
          <Text>{state.details.website}</Text>
        </HStack>
      </VStack>
    );

  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

export default Details;
