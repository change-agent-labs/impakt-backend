/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllImportantNotifications = /* GraphQL */ `
  query ListAllImportantNotifications($region: String!) {
    listAllImportantNotifications(region: $region) {
      ... on Announcement {
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
      ... on Event {
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
  }
`;
export const getCoversationByRegion = /* GraphQL */ `
  query GetCoversationByRegion($region: String!, $type: String!, $name: String!) {
    getCoversationByRegion(region: $region, type: $type, name: $name) {
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
export const me = /* GraphQL */ `
  query Me {
    me {
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
export const listConversation = /* GraphQL */ `
  query ListConversation(
    $id: ID
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConversation(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listCoversationsByRegion = /* GraphQL */ `
  query ListCoversationsByRegion(
    $region: String
    $typeName: ModelConversationRegionCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoversationsByRegion(
      region: $region
      typeName: $typeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessage = /* GraphQL */ `
  query ListMessage($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
    listMessage(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($org: String!, $region: String!) {
    getLocation(org: $org, region: $region) {
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
export const listLocation = /* GraphQL */ `
  query ListLocation(
    $org: String
    $region: ModelStringKeyConditionInput
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLocation(
      org: $org
      region: $region
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        region
        org
        name
        coordinatorName
        coordinatorEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLocationByIndex = /* GraphQL */ `
  query ListLocationByIndex(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationByIndex(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        region
        org
        name
        coordinatorName
        coordinatorEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($region: String!, $name: String!) {
    getCategory(region: $region, name: $name) {
      id
      region
      org
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCategory = /* GraphQL */ `
  query ListCategory(
    $region: String
    $name: ModelStringKeyConditionInput
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategory(
      region: $region
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        region
        org
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCategoryByIndex = /* GraphQL */ `
  query ListCategoryByIndex(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryByIndex(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        region
        org
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCategoryByOrg = /* GraphQL */ `
  query ListCategoryByOrg(
    $org: String
    $regionName: ModelCategoryOrgCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryByOrg(
      org: $org
      regionName: $regionName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        region
        org
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUser = /* GraphQL */ `
  query ListUser(
    $cognitoId: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUser(
      cognitoId: $cognitoId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
`;
export const getUser = /* GraphQL */ `
  query GetUser($cognitoId: ID!) {
    getUser(cognitoId: $cognitoId) {
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
export const listUsersByOrg = /* GraphQL */ `
  query ListUsersByOrg(
    $org: String
    $cognitoGroup: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByOrg(
      org: $org
      cognitoGroup: $cognitoGroup
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const getPropaganda = /* GraphQL */ `
  query GetPropaganda($region: String!, $category: String!, $title: String!) {
    getPropaganda(region: $region, category: $category, title: $title) {
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
export const listPropaganda = /* GraphQL */ `
  query ListPropaganda(
    $region: String
    $categoryTitle: ModelPropagandaPrimaryCompositeKeyConditionInput
    $filter: ModelPropagandaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPropaganda(
      region: $region
      categoryTitle: $categoryTitle
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPropagandaByOrg = /* GraphQL */ `
  query ListPropagandaByOrg(
    $org: String
    $categoryTitle: ModelPropagandaOrgCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropagandaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropagandaByOrg(
      org: $org
      categoryTitle: $categoryTitle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPropagandaSortedByTime = /* GraphQL */ `
  query ListPropagandaSortedByTime(
    $region: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropagandaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropagandaSortedByTime(
      region: $region
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($region: String!, $category: String!, $title: String!) {
    getEvent(region: $region, category: $category, title: $title) {
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
export const listEvent = /* GraphQL */ `
  query ListEvent(
    $region: String
    $categoryTitle: ModelEventPrimaryCompositeKeyConditionInput
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEvent(
      region: $region
      categoryTitle: $categoryTitle
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listEventSortedByWhenDate = /* GraphQL */ `
  query ListEventSortedByWhenDate(
    $region: String
    $whenDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSortedByWhenDate(
      region: $region
      whenDate: $whenDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listEventSortedByUpdateTime = /* GraphQL */ `
  query ListEventSortedByUpdateTime(
    $region: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSortedByUpdateTime(
      region: $region
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listEventByOrg = /* GraphQL */ `
  query ListEventByOrg(
    $org: String
    $categoryTitle: ModelEventOrgCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventByOrg(
      org: $org
      categoryTitle: $categoryTitle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($region: String!, $category: String!, $title: String!) {
    getAnnouncement(region: $region, category: $category, title: $title) {
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
export const listAnnouncement = /* GraphQL */ `
  query ListAnnouncement(
    $region: String
    $categoryTitle: ModelAnnouncementPrimaryCompositeKeyConditionInput
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAnnouncement(
      region: $region
      categoryTitle: $categoryTitle
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listAnnouncementByOrg = /* GraphQL */ `
  query ListAnnouncementByOrg(
    $org: String
    $categoryTitle: ModelAnnouncementOrgCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncementByOrg(
      org: $org
      categoryTitle: $categoryTitle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listAnnouncementSortedByUpdateTime = /* GraphQL */ `
  query ListAnnouncementSortedByUpdateTime(
    $region: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncementSortedByUpdateTime(
      region: $region
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
