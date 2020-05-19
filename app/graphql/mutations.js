/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const notifyCoordinator = /* GraphQL */ `
  mutation NotifyCoordinator(
    $currentNick: String!
    $contactDetails: String!
    $coordinatorEmail: String!
    $msg: String
  ) {
    notifyCoordinator(
      currentNick: $currentNick
      contactDetails: $contactDetails
      coordinatorEmail: $coordinatorEmail
      msg: $msg
    )
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        items {
          id
          authorNick
          content
          convoId
          isSent
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          cognitoId
          cognitoGroup
          currentNick
          pubKey
          org
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation($input: UpdateConversationInput!) {
    updateConversation(input: $input) {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        items {
          id
          authorNick
          content
          convoId
          isSent
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          cognitoId
          cognitoGroup
          currentNick
          pubKey
          org
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation($input: DeleteConversationInput!) {
    deleteConversation(input: $input) {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        items {
          id
          authorNick
          content
          convoId
          isSent
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          cognitoId
          cognitoGroup
          currentNick
          pubKey
          org
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
      authorNick
      content
      convoId
      isSent
      resources {
        name
        bucket
        region
        key
      }
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
        messages {
          nextToken
        }
        users {
          nextToken
        }
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      id
      region
      org
      name
      coordinatorName
      coordinatorEmail
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation($input: UpdateLocationInput!) {
    updateLocation(input: $input) {
      id
      region
      org
      name
      coordinatorName
      coordinatorEmail
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation($input: DeleteLocationInput!) {
    deleteLocation(input: $input) {
      id
      region
      org
      name
      coordinatorName
      coordinatorEmail
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      id
      region
      org
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory($input: DeleteCategoryInput!) {
    deleteCategory(input: $input) {
      id
      region
      org
      name
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
`;
export const createPropaganda = /* GraphQL */ `
  mutation CreatePropaganda($input: CreatePropagandaInput!) {
    createPropaganda(input: $input) {
      authorNick
      category
      title
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const updatePropaganda = /* GraphQL */ `
  mutation UpdatePropaganda($input: UpdatePropagandaInput!) {
    updatePropaganda(input: $input) {
      authorNick
      category
      title
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const deletePropaganda = /* GraphQL */ `
  mutation DeletePropaganda($input: DeletePropagandaInput!) {
    deletePropaganda(input: $input) {
      authorNick
      category
      title
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      authorNick
      category
      title
      whenDate
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
        messages {
          nextToken
        }
        users {
          nextToken
        }
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
      authorNick
      category
      title
      whenDate
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
        messages {
          nextToken
        }
        users {
          nextToken
        }
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($input: DeleteEventInput!) {
    deleteEvent(input: $input) {
      authorNick
      category
      title
      whenDate
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
        messages {
          nextToken
        }
        users {
          nextToken
        }
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement($input: CreateAnnouncementInput!) {
    createAnnouncement(input: $input) {
      authorNick
      category
      title
      whenDate
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement($input: UpdateAnnouncementInput!) {
    updateAnnouncement(input: $input) {
      authorNick
      category
      title
      whenDate
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement($input: DeleteAnnouncementInput!) {
    deleteAnnouncement(input: $input) {
      authorNick
      category
      title
      whenDate
      content
      resources {
        name
        bucket
        region
        key
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
`;
