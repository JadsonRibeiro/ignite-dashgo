import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
    showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="center">
                    <Text>Jadson Ribeiro</Text>
                    <Text color="gray.300" fontSize="small">
                        jdsntj@gmail.com
                    </Text>
                </Box>
            ) }

            <Avatar size="md" name="Jadson Ribeiro" src="https://github.com/jadsonribeiro.png" />
        </Flex>
    );
}