"use strict";var zt=Object.create;var Ie=Object.defineProperty;var Gt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var Qt=Object.getPrototypeOf,$t=Object.prototype.hasOwnProperty;var he=(t,r,e)=>()=>{if(e)throw e[0];try{return t&&(r=t(t=0)),r}catch(a){throw e=[a],a}};var ee=(t,r)=>{for(var e in r)Ie(t,e,{get:r[e],enumerable:!0})},be=(t,r,e,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Ht(r))!$t.call(t,n)&&n!==e&&Ie(t,n,{get:()=>r[n],enumerable:!(a=Gt(r,n))||a.enumerable});return t},v=(t,r,e)=>(be(t,r,"default"),e&&be(e,r,"default")),N=(t,r,e)=>(e=t!=null?zt(Qt(t)):{},be(r||!t||!t.__esModule?Ie(e,"default",{value:t,enumerable:!0}):e,t)),Wt=t=>be(Ie({},"__esModule",{value:!0}),t);var h={};ee(h,{default:()=>Je.default});var Je,Re=he(()=>{v(h,require("formdata-polyfill/esm.min.js"));Je=N(require("formdata-polyfill/esm.min.js"))});var B={};ee(B,{default:()=>tt.default});var tt,Be=he(()=>{v(B,require("fetch-blob/from.js"));tt=N(require("fetch-blob/from.js"))});var rt={};ee(rt,{toFormData:()=>ur});function sr(t){let r=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!r)return;let e=r[2]||r[3]||"",a=e.slice(e.lastIndexOf("\\")+1);return a=a.replace(/%22/g,'"'),a=a.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),a}async function ur(t,r){if(!/multipart/i.test(r))throw new TypeError("Failed to fetch");let e=r.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!e)throw new TypeError("no or bad content-type header, no multipart boundary");let a=new Oe(e[1]||e[2]),n,o,u,S,l,y,R=[],f=new h.FormData,E=i=>{u+=I.decode(i,{stream:!0})},b=i=>{R.push(i)},p=()=>{let i=new B.File(R,y,{type:l});f.append(S,i)},A=()=>{f.append(S,u)},I=new TextDecoder("utf-8");I.decode(),a.onPartBegin=function(){a.onPartData=E,a.onPartEnd=A,n="",o="",u="",S="",l="",y=null,R.length=0},a.onHeaderField=function(i){n+=I.decode(i,{stream:!0})},a.onHeaderValue=function(i){o+=I.decode(i,{stream:!0})},a.onHeaderEnd=function(){if(o+=I.decode(),n=n.toLowerCase(),n==="content-disposition"){let i=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);i&&(S=i[2]||i[3]||""),y=sr(o),y&&(a.onPartData=b,a.onPartEnd=p)}else n==="content-type"&&(l=o);o="",n=""};for await(let i of t)a.write(i);return a.end(),f}var z,m,at,Y,Pe,Ee,ar,le,rr,nr,or,ir,J,Oe,nt=he(()=>{Be();Re();z=0,m={START_BOUNDARY:z++,HEADER_FIELD_START:z++,HEADER_FIELD:z++,HEADER_VALUE_START:z++,HEADER_VALUE:z++,HEADER_VALUE_ALMOST_DONE:z++,HEADERS_ALMOST_DONE:z++,PART_DATA_START:z++,PART_DATA:z++,END:z++},at=1,Y={PART_BOUNDARY:at,LAST_BOUNDARY:at*=2},Pe=10,Ee=13,ar=32,le=45,rr=58,nr=97,or=122,ir=t=>t|32,J=()=>{},Oe=class{constructor(r){this.index=0,this.flags=0,this.onHeaderEnd=J,this.onHeaderField=J,this.onHeadersEnd=J,this.onHeaderValue=J,this.onPartBegin=J,this.onPartData=J,this.onPartEnd=J,this.boundaryChars={},r=`\r
--`+r;let e=new Uint8Array(r.length);for(let a=0;a<r.length;a++)e[a]=r.charCodeAt(a),this.boundaryChars[e[a]]=!0;this.boundary=e,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=m.START_BOUNDARY}write(r){let e=0,a=r.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:S,index:l,state:y,flags:R}=this,f=this.boundary.length,E=f-1,b=r.length,p,A,I=g=>{this[g+"Mark"]=e},i=g=>{delete this[g+"Mark"]},P=(g,_,C,ne)=>{(_===void 0||_!==C)&&this[g](ne&&ne.subarray(_,C))},W=(g,_)=>{let C=g+"Mark";C in this&&(_?(P(g,this[C],e,r),delete this[C]):(P(g,this[C],r.length,r),this[C]=0))};for(e=0;e<a;e++)switch(p=r[e],y){case m.START_BOUNDARY:if(l===u.length-2){if(p===le)R|=Y.LAST_BOUNDARY;else if(p!==Ee)return;l++;break}else if(l-1===u.length-2){if(R&Y.LAST_BOUNDARY&&p===le)y=m.END,R=0;else if(!(R&Y.LAST_BOUNDARY)&&p===Pe)l=0,P("onPartBegin"),y=m.HEADER_FIELD_START;else return;break}p!==u[l+2]&&(l=-2),p===u[l+2]&&l++;break;case m.HEADER_FIELD_START:y=m.HEADER_FIELD,I("onHeaderField"),l=0;case m.HEADER_FIELD:if(p===Ee){i("onHeaderField"),y=m.HEADERS_ALMOST_DONE;break}if(l++,p===le)break;if(p===rr){if(l===1)return;W("onHeaderField",!0),y=m.HEADER_VALUE_START;break}if(A=ir(p),A<nr||A>or)return;break;case m.HEADER_VALUE_START:if(p===ar)break;I("onHeaderValue"),y=m.HEADER_VALUE;case m.HEADER_VALUE:p===Ee&&(W("onHeaderValue",!0),P("onHeaderEnd"),y=m.HEADER_VALUE_ALMOST_DONE);break;case m.HEADER_VALUE_ALMOST_DONE:if(p!==Pe)return;y=m.HEADER_FIELD_START;break;case m.HEADERS_ALMOST_DONE:if(p!==Pe)return;P("onHeadersEnd"),y=m.PART_DATA_START;break;case m.PART_DATA_START:y=m.PART_DATA,I("onPartData");case m.PART_DATA:if(n=l,l===0){for(e+=E;e<b&&!(r[e]in S);)e+=f;e-=E,p=r[e]}if(l<u.length)u[l]===p?(l===0&&W("onPartData",!0),l++):l=0;else if(l===u.length)l++,p===Ee?R|=Y.PART_BOUNDARY:p===le?R|=Y.LAST_BOUNDARY:l=0;else if(l-1===u.length)if(R&Y.PART_BOUNDARY){if(l=0,p===Pe){R&=~Y.PART_BOUNDARY,P("onPartEnd"),P("onPartBegin"),y=m.HEADER_FIELD_START;break}}else R&Y.LAST_BOUNDARY&&p===le?(P("onPartEnd"),y=m.END,R=0):l=0;if(l>0)o[l-1]=p;else if(n>0){let g=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);P("onPartData",0,n,g),n=0,I("onPartData"),e--}break;case m.END:break;default:throw new Error(`Unexpected state entered: ${y}`)}W("onHeaderField"),W("onHeaderValue"),W("onPartData"),this.index=l,this.state=y,this.flags=R}end(){if(this.state===m.HEADER_FIELD_START&&this.index===0||this.state===m.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==m.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Cr={};ee(Cr,{default:()=>Er});module.exports=Wt(Cr);var s=require("@raycast/api"),jt=require("date-fns");var D=require("@raycast/api"),ze=N(require("react")),K=require("react/jsx-runtime");function Kt(t,r=100){return t.length>r?t.slice(0,r)+" ...":t}function Ge(t){let r=t.error,e=()=>{(0,D.launchCommand)({name:D.environment.commandName,type:D.LaunchType.UserInitiated})};return(0,K.jsx)(D.MenuBarExtra,{icon:t.icon,isLoading:t.isLoading,title:t.title,tooltip:t.tooltip,children:r?(0,K.jsx)(M,{title:`Error: ${r}`,icon:{source:D.Icon.Warning},onAction:e}):t.children})}function M(t){return(0,K.jsx)(D.MenuBarExtra.Item,{title:Kt(t.title),icon:t.icon,subtitle:t.subtitle,shortcut:t.shortcut,onAction:t.onAction,tooltip:t.tooltip})}function Yt(t,r){if(!r)return{shown:t,hidden:0};if(ze.default.isValidElement(t))return{shown:[t],hidden:0};let e=t;if(!e||e.length<=0)return{shown:void 0,hidden:0};let a=r||10,n=e.slice(0,a),o=e.length-n.length;return{shown:n,hidden:o}}function He(t,r){if(!(!t||t.length<=0))return t.join(r)}function H(t){let r=He([t.title,t.subtitle].filter(o=>o)," "),{shown:e,hidden:a}=Yt(t.children,t.maxChildren),n=e===void 0||e.length<=0;return(0,K.jsxs)(D.MenuBarExtra.Section,{title:r,children:[e,a>0&&t.moreElement&&t.moreElement(a),n&&t.emptyElement&&t.emptyElement]})}function te(t){let r=He([t.title,t.subtitle].filter(e=>e)," ")||"";return(0,K.jsx)(D.MenuBarExtra.Submenu,{title:r,icon:t.icon,children:t.children})}function Qe(){return(0,K.jsx)(D.MenuBarExtra.Item,{title:"Configure Command",shortcut:{modifiers:["cmd"],key:","},icon:D.Icon.Gear,onAction:()=>(0,D.openCommandPreferences)()})}var c=N(require("graphql-tag")),oe=c.default`
  fragment ShortRepositoryFields on Repository {
    id
    defaultBranchRef {
      target {
        oid
      }
    }
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    mergeCommitAllowed
    squashMergeAllowed
    rebaseMergeAllowed
    autoMergeAllowed
  }
`,Jt=c.default`
  fragment DiscussionFields on Discussion {
    id
    title
    bodyText
    publishedAt
    repository {
      ...ShortRepositoryFields
    }
    url
    upvoteCount
    category {
      name
      emoji
      emojiHTML
    }
    comments {
      totalCount
    }
    answer {
      bodyText
    }
    author {
      login
      avatarUrl
    }
  }
  ${oe}
`,k=c.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ie=c.default`
  fragment AuthorFields on Actor {
    ... on Bot {
      id
      login
      avatarUrl(size: 64)
    }
    ... on User {
      ...UserFields
    }
    ... on Mannequin {
      id
      login
      avatarUrl(size: 64)
    }
    ... on Organization {
      id
      login
      name
      avatarUrl(size: 64)
    }
    ... on EnterpriseUserAccount {
      id
      login
      name
      avatarUrl(size: 64)
    }
  }
  ${k}
`,Me=c.default`
  fragment IssueFields on Issue {
    id
    url
    title
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            id
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    comments(first: 0) {
      totalCount
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
  }
  ${ie}
  ${oe}
  ${k}
`,Xt=c.default`
  fragment IssueDetailFields on Issue {
    id
    url
    title
    body
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
        isDefault
      }
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 25) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${ie}
  ${oe}
  ${k}
`,Zt=c.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,$e=c.default`
  fragment ProjectFields on ProjectV2 {
    id
    title
    public
    number
    readme
    closed
    shortDescription
    url
    createdAt
    creator {
      ...AuthorFields
    }
    updatedAt
    views(first: 50) {
      totalCount
      nodes {
        ...ProjectViewerFields
      }
    }
    viewerCanClose
    viewerCanUpdate
    viewerCanReopen
  }
  ${ie}
  ${Zt}
`,We=c.default`
  fragment PullRequestFields on PullRequest {
    id
    title
    permalink
    merged
    number
    isDraft
    closed
    updatedAt
    mergeable
    milestone {
      id
      title
    }
    reviewDecision
    repository {
      ...ShortRepositoryFields
    }
    headRefName
    headRef {
      name
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewThreads(first: 100) {
      totalCount
      nodes {
        comments(first: 0) {
          totalCount
        }
      }
    }
    reviews(first: 100) {
      totalCount
      nodes {
        bodyText
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
  }
  ${oe}
  ${ie}
  ${k}
`,ea=c.default`
  fragment PullRequestDetailsFields on PullRequest {
    id
    title
    body
    permalink
    merged
    number
    isDraft
    closed
    createdAt
    updatedAt
    additions
    deletions
    mergeable
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    baseRefName
    baseRef {
      name
    }
    headRefName
    headRef {
      name
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
      }
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewRequests(first: 50) {
      totalCount
      nodes {
        requestedReviewer {
          ... on Team {
            id
            teamName: name
            teamAvatarURL: avatarUrl(size: 64)
          }
          ... on User {
            id
            githubUsername: login
            userName: name
            userAvatarURL: avatarUrl(size: 64)
          }
          ... on Mannequin {
            id
            githubUsername: login
            userAvatarURL: avatarUrl(size: 64)
          }
        }
      }
    }
    reviews(first: 10, states: [PENDING, APPROVED, CHANGES_REQUESTED]) {
      totalCount
      nodes {
        state
        author {
          ...AuthorFields
        }
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 20) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${oe}
  ${ie}
  ${k}
`,ta=c.default`
  fragment PullRequestCommitFields on PullRequest {
    commits(last: $numberOfItems, before: $before) {
      totalCount
      nodes {
        commit {
          id
          authoredDate
          message
          oid
          abbreviatedOid
          author {
            avatarUrl(size: 64)
            name
          }
          statusCheckRollup {
            state
          }
          url
          treeUrl
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
`,Ke=c.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Te=c.default`
  fragment ExtendedRepositoryFields on Repository {
    id
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    updatedAt
    pushedAt
    stargazerCount
    isArchived
    isFork
    isPrivate
    viewerHasStarred
    primaryLanguage {
      id
      name
      color
    }
  }
`,aa=c.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,ra=c.default`
  mutation createLinkedBranch($input: CreateLinkedBranchInput!) {
    createLinkedBranch(input: $input) {
      clientMutationId
      linkedBranch {
        ref {
          id
          name
        }
      }
    }
  }
`,na=c.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,oa=c.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,ia=c.default`
  query searchDiscussions($query: String!, $numberOfItems: Int!, $after: String) {
    searchDiscussions: search(query: $query, type: DISCUSSION, first: $numberOfItems, after: $after) {
      nodes {
        ...DiscussionFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Jt}
`,sa=c.default`
  query getGitHubDiscussionNumber($filter: String!) {
    search(query: $filter, type: DISCUSSION, first: 1) {
      nodes {
        ... on Discussion {
          number
          url
        }
      }
    }
  }
`,ua=c.default`
  query repositoryCollaboratorsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      issue(number: $issueNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${k}
`,pa=c.default`
  query repositoryProjectsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      issue(number: $issueNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,la=c.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Xt}
`,ca=c.default`
  query searchIssues($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      nodes {
        ...IssueFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Me}
`,ya=c.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Me}
`,Sa=c.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,da=c.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,ba=c.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ia=c.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ma=c.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ga=c.default`
  mutation createIssue(
    $repositoryId: ID!
    $title: String!
    $body: String!
    $assigneeIds: [ID!]!
    $labelIds: [ID!]!
    $milestoneId: ID
    $issueTypeId: ID
  ) {
    createIssue(
      input: {
        repositoryId: $repositoryId
        title: $title
        body: $body
        assigneeIds: $assigneeIds
        labelIds: $labelIds
        milestoneId: $milestoneId
        issueTypeId: $issueTypeId
      }
    ) {
      issue {
        ...IssueFields
      }
    }
  }
  ${Me}
`,ma=c.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Ra=c.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${$e}
`,Aa=c.default`
  query searchPullRequests($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      edges {
        node {
          ...PullRequestFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${We}
`,Pa=c.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${ea}
`,Ea=c.default`
  query repositoryCollaboratorsForPullRequests(
    $owner: String!
    $name: String!
    $pullRequestNumber: Int!
    $searchQuery: String
  ) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25, query: $searchQuery) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      pullRequest(number: $pullRequestNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${k}
`,Ca=c.default`
  query repositoryProjectsForPullRequests($owner: String!, $name: String!, $pullRequestNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      pullRequest(number: $pullRequestNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,fa=c.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${ta}
`,Da=c.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,xa=c.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ua=c.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,_a=c.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,va=c.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ha=c.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ta=c.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,wa=c.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ba=c.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Oa=c.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,La=c.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Va=c.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Na=c.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,qa=c.default`
  mutation createPullRequest(
    $repositoryId: ID!
    $into: String!
    $from: String!
    $title: String!
    $body: String!
    $isDraft: Boolean!
  ) {
    createPullRequest(
      input: {
        repositoryId: $repositoryId
        baseRefName: $into
        headRefName: $from
        title: $title
        body: $body
        draft: $isDraft
      }
    ) {
      pullRequest {
        id
      }
    }
  }
`,Fa=c.default`
  mutation initPullRequest(
    $pullRequestId: ID!
    $reviewersIds: [ID!]!
    $assigneeIds: [ID!]!
    $labelsIds: [ID!]!
    $milestoneId: ID
  ) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: $reviewersIds }) {
      pullRequest {
        id
        reviewRequests {
          totalCount
        }
      }
    }
    updatePullRequest(
      input: {
        pullRequestId: $pullRequestId
        assigneeIds: $assigneeIds
        labelIds: $labelsIds
        milestoneId: $milestoneId
      }
    ) {
      pullRequest {
        ...PullRequestFields
      }
    }
  }
  ${We}
`,ja=c.default`
  query searchRepositories($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, first: $numberOfItems, after: $after, type: REPOSITORY) {
      nodes {
        ...ExtendedRepositoryFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${Te}
`,ka=c.default`
  query myLatestRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: RepositoryOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      repositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${Te}
`,za=c.default`
  query milestonesForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      milestones(first: 25, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
    }
  }
`,Ga=c.default`
  query commentsForPullRequest($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        comments(first: 100) {
          nodes {
            author {
              login
            }
            body
          }
        }
      }
    }
  }
`,Ha=c.default`
  query dataForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      mergeCommitAllowed
      squashMergeAllowed
      rebaseMergeAllowed
      autoMergeAllowed
      defaultBranchRef {
        id
        name
        target {
          ...CommitFields
        }
      }
      issueTypes(orderBy: { direction: ASC, field: NAME }, first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isEnabled
        }
      }
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50) {
        totalCount
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
      collaborators(first: 50) {
        totalCount
        nodes {
          ...UserFields
        }
      }
      labels(first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isDefault
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          id
          title
        }
      }
      milestones(first: 50, states: OPEN, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
        }
      }
      owner {
        __typename
        ... on Organization {
          projectsV2(first: 50) {
            totalCount
            nodes {
              id
              title
            }
          }
        }
      }
      pullRequestTemplates {
        body
      }
      issueTemplates {
        name
        about
        title
        body
      }
    }
  }
  ${Ke}
  ${k}
`,Qa=c.default`
  query searchRepositoryBranches($owner: String!, $name: String!, $query: String!) {
    repository(owner: $owner, name: $name) {
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50, query: $query) {
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
    }
  }
  ${Ke}
`,$a=c.default`
  query repositoryIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      url
      defaultBranchRef {
        id
        name
        target {
          oid
        }
      }
      issues(first: 50, states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          ...IssueFields
        }
      }
    }
  }
  ${Me}
`,Wa=c.default`
  query repositoryReleases($name: String!, $owner: String!, $numberOfItems: Int!, $after: String) {
    repository(name: $name, owner: $owner) {
      ... on Repository {
        releases(first: $numberOfItems, after: $after, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            ...ReleaseFields
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
  ${aa}
`,Ka=c.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ya=c.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ja=c.default`
  query myStarredRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: StarOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      starredRepositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${Te}
`,Xa=c.default`
  query getViewer {
    viewer {
      ...UserFields
      organizations(first: 50) {
        totalCount
        nodes {
          avatarUrl
          login
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          ...ProjectFields
        }
      }
    }
  }
  ${k}
  ${$e}
`,Za=c.default`
  query getViewerStats {
    viewer {
      ...UserFields
      bio
      company
      location
      url
      websiteUrl
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      pullRequestsAuthored: pullRequests {
        totalCount
      }
      pullRequestsMerged: pullRequests(states: [MERGED]) {
        totalCount
      }
      pullRequestsOpen: pullRequests(states: [OPEN]) {
        totalCount
      }
      issuesAuthored: issues {
        totalCount
      }
      issuesOpen: issues(states: [OPEN]) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
      }
      publicRepos: repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
      }
      ownedRepositories: repositories(ownerAffiliations: OWNER) {
        totalCount
      }
    }
    rateLimit {
      remaining
      limit
      used
      resetAt
    }
  }
  ${k}
`,er=c.default`
  query getViewerStatsDetails($repositoriesCount: Int = 100) {
    viewer {
      recentPullRequests: pullRequests(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenPullRequests: pullRequests(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      recentIssues: issues(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenIssues: issues(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      ownedRepositories: repositories(
        first: $repositoriesCount
        ownerAffiliations: OWNER
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          nameWithOwner
          url
          stargazerCount
          forkCount
        }
      }
      organizations(first: 20) {
        nodes {
          id
          login
          name
          avatarUrl
          url
        }
      }
    }
  }
`,tr=(t,r,e,a)=>t();function Ye(t,r=tr){return{createLinkedBranch(e,a,n){return r(o=>t.request({document:ra,variables:e,requestHeaders:{...a,...o},signal:n}),"createLinkedBranch","mutation",e)},createRef(e,a,n){return r(o=>t.request({document:na,variables:e,requestHeaders:{...a,...o},signal:n}),"createRef","mutation",e)},deleteLinkedBranch(e,a,n){return r(o=>t.request({document:oa,variables:e,requestHeaders:{...a,...o},signal:n}),"deleteLinkedBranch","mutation",e)},searchDiscussions(e,a,n){return r(o=>t.request({document:ia,variables:e,requestHeaders:{...a,...o},signal:n}),"searchDiscussions","query",e)},getGitHubDiscussionNumber(e,a,n){return r(o=>t.request({document:sa,variables:e,requestHeaders:{...a,...o},signal:n}),"getGitHubDiscussionNumber","query",e)},repositoryCollaboratorsForIssues(e,a,n){return r(o=>t.request({document:ua,variables:e,requestHeaders:{...a,...o},signal:n}),"repositoryCollaboratorsForIssues","query",e)},repositoryProjectsForIssues(e,a,n){return r(o=>t.request({document:pa,variables:e,requestHeaders:{...a,...o},signal:n}),"repositoryProjectsForIssues","query",e)},issueDetails(e,a,n){return r(o=>t.request({document:la,variables:e,requestHeaders:{...a,...o},signal:n}),"issueDetails","query",e)},searchIssues(e,a,n){return r(o=>t.request({document:ca,variables:e,requestHeaders:{...a,...o},signal:n}),"searchIssues","query",e)},issueByNumber(e,a,n){return r(o=>t.request({document:ya,variables:e,requestHeaders:{...a,...o},signal:n}),"issueByNumber","query",e)},closeIssue(e,a,n){return r(o=>t.request({document:Sa,variables:e,requestHeaders:{...a,...o},signal:n}),"closeIssue","mutation",e)},reopenIssue(e,a,n){return r(o=>t.request({document:da,variables:e,requestHeaders:{...a,...o},signal:n}),"reopenIssue","mutation",e)},changeIssueAssignees(e,a,n){return r(o=>t.request({document:ba,variables:e,requestHeaders:{...a,...o},signal:n}),"changeIssueAssignees","mutation",e)},changeIssueMilestone(e,a,n){return r(o=>t.request({document:Ia,variables:e,requestHeaders:{...a,...o},signal:n}),"changeIssueMilestone","mutation",e)},addIssueToProject(e,a,n){return r(o=>t.request({document:Ma,variables:e,requestHeaders:{...a,...o},signal:n}),"addIssueToProject","mutation",e)},createIssue(e,a,n){return r(o=>t.request({document:ga,variables:e,requestHeaders:{...a,...o},signal:n}),"createIssue","mutation",e)},changeProjectStatus(e,a,n){return r(o=>t.request({document:ma,variables:e,requestHeaders:{...a,...o},signal:n}),"changeProjectStatus","mutation",e)},projectDetails(e,a,n){return r(o=>t.request({document:Ra,variables:e,requestHeaders:{...a,...o},signal:n}),"projectDetails","query",e)},searchPullRequests(e,a,n){return r(o=>t.request({document:Aa,variables:e,requestHeaders:{...a,...o},signal:n}),"searchPullRequests","query",e)},pullRequestDetails(e,a,n){return r(o=>t.request({document:Pa,variables:e,requestHeaders:{...a,...o},signal:n}),"pullRequestDetails","query",e)},repositoryCollaboratorsForPullRequests(e,a,n){return r(o=>t.request({document:Ea,variables:e,requestHeaders:{...a,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",e)},repositoryProjectsForPullRequests(e,a,n){return r(o=>t.request({document:Ca,variables:e,requestHeaders:{...a,...o},signal:n}),"repositoryProjectsForPullRequests","query",e)},pullRequestCommits(e,a,n){return r(o=>t.request({document:fa,variables:e,requestHeaders:{...a,...o},signal:n}),"pullRequestCommits","query",e)},closePullRequest(e,a,n){return r(o=>t.request({document:Da,variables:e,requestHeaders:{...a,...o},signal:n}),"closePullRequest","mutation",e)},reopenPullRequest(e,a,n){return r(o=>t.request({document:xa,variables:e,requestHeaders:{...a,...o},signal:n}),"reopenPullRequest","mutation",e)},markPullRequestReadyForReview(e,a,n){return r(o=>t.request({document:Ua,variables:e,requestHeaders:{...a,...o},signal:n}),"markPullRequestReadyForReview","mutation",e)},addPullRequestReview(e,a,n){return r(o=>t.request({document:_a,variables:e,requestHeaders:{...a,...o},signal:n}),"addPullRequestReview","mutation",e)},changePullRequestAssignees(e,a,n){return r(o=>t.request({document:va,variables:e,requestHeaders:{...a,...o},signal:n}),"changePullRequestAssignees","mutation",e)},changePullRequestMilestone(e,a,n){return r(o=>t.request({document:ha,variables:e,requestHeaders:{...a,...o},signal:n}),"changePullRequestMilestone","mutation",e)},addPullRequestToProject(e,a,n){return r(o=>t.request({document:Ta,variables:e,requestHeaders:{...a,...o},signal:n}),"addPullRequestToProject","mutation",e)},requestReview(e,a,n){return r(o=>t.request({document:wa,variables:e,requestHeaders:{...a,...o},signal:n}),"requestReview","mutation",e)},mergePullRequest(e,a,n){return r(o=>t.request({document:Ba,variables:e,requestHeaders:{...a,...o},signal:n}),"mergePullRequest","mutation",e)},addPullRequestToMergeQueue(e,a,n){return r(o=>t.request({document:Oa,variables:e,requestHeaders:{...a,...o},signal:n}),"addPullRequestToMergeQueue","mutation",e)},removePullRequestFromMergeQueue(e,a,n){return r(o=>t.request({document:La,variables:e,requestHeaders:{...a,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",e)},enablePullRequestAutoMerge(e,a,n){return r(o=>t.request({document:Va,variables:e,requestHeaders:{...a,...o},signal:n}),"enablePullRequestAutoMerge","mutation",e)},disablePullRequestAutoMerge(e,a,n){return r(o=>t.request({document:Na,variables:e,requestHeaders:{...a,...o},signal:n}),"disablePullRequestAutoMerge","mutation",e)},createPullRequest(e,a,n){return r(o=>t.request({document:qa,variables:e,requestHeaders:{...a,...o},signal:n}),"createPullRequest","mutation",e)},initPullRequest(e,a,n){return r(o=>t.request({document:Fa,variables:e,requestHeaders:{...a,...o},signal:n}),"initPullRequest","mutation",e)},searchRepositories(e,a,n){return r(o=>t.request({document:ja,variables:e,requestHeaders:{...a,...o},signal:n}),"searchRepositories","query",e)},myLatestRepositories(e,a,n){return r(o=>t.request({document:ka,variables:e,requestHeaders:{...a,...o},signal:n}),"myLatestRepositories","query",e)},milestonesForRepository(e,a,n){return r(o=>t.request({document:za,variables:e,requestHeaders:{...a,...o},signal:n}),"milestonesForRepository","query",e)},commentsForPullRequest(e,a,n){return r(o=>t.request({document:Ga,variables:e,requestHeaders:{...a,...o},signal:n}),"commentsForPullRequest","query",e)},dataForRepository(e,a,n){return r(o=>t.request({document:Ha,variables:e,requestHeaders:{...a,...o},signal:n}),"dataForRepository","query",e)},searchRepositoryBranches(e,a,n){return r(o=>t.request({document:Qa,variables:e,requestHeaders:{...a,...o},signal:n}),"searchRepositoryBranches","query",e)},repositoryIssues(e,a,n){return r(o=>t.request({document:$a,variables:e,requestHeaders:{...a,...o},signal:n}),"repositoryIssues","query",e)},repositoryReleases(e,a,n){return r(o=>t.request({document:Wa,variables:e,requestHeaders:{...a,...o},signal:n}),"repositoryReleases","query",e)},addStar(e,a,n){return r(o=>t.request({document:Ka,variables:e,requestHeaders:{...a,...o},signal:n}),"addStar","mutation",e)},removeStar(e,a,n){return r(o=>t.request({document:Ya,variables:e,requestHeaders:{...a,...o},signal:n}),"removeStar","mutation",e)},myStarredRepositories(e,a,n){return r(o=>t.request({document:Ja,variables:e,requestHeaders:{...a,...o},signal:n}),"myStarredRepositories","query",e)},getViewer(e,a,n){return r(o=>t.request({document:Xa,variables:e,requestHeaders:{...a,...o},signal:n}),"getViewer","query",e)},getViewerStats(e,a,n){return r(o=>t.request({document:Za,variables:e,requestHeaders:{...a,...o},signal:n}),"getViewerStats","query",e)},getViewerStatsDetails(e,a,n){return r(o=>t.request({document:er,variables:e,requestHeaders:{...a,...o},signal:n}),"getViewerStatsDetails","query",e)}}}var Ut=require("@raycast/utils");var At=require("@octokit/rest"),Pt=require("@raycast/api"),Et=require("@raycast/utils"),Ct=require("graphql-request");var mt=N(require("node:http"),1),Rt=N(require("node:https"),1),Z=N(require("node:zlib"),1),V=N(require("node:stream"),1),Se=require("node:buffer");var se={};ee(se,{default:()=>ge.default});v(se,require("data-uri-to-buffer"));var ge=N(require("data-uri-to-buffer"));var q=N(require("node:stream"),1),$=require("node:util"),O=require("node:buffer");var ue={};ee(ue,{default:()=>me.default});v(ue,require("fetch-blob"));var me=N(require("fetch-blob"));Re();var Q=class extends Error{constructor(r,e){super(r),Error.captureStackTrace(this,this.constructor),this.type=e}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var T=class extends Q{constructor(r,e,a){super(r,e),a&&(this.code=this.errno=a.code,this.erroredSysCall=a.syscall)}};var Ae=Symbol.toStringTag,we=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[Ae]==="URLSearchParams",pe=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[Ae]),Xe=t=>typeof t=="object"&&(t[Ae]==="AbortSignal"||t[Ae]==="EventTarget"),Ze=(t,r)=>{let e=new URL(r).hostname,a=new URL(t).hostname;return e===a||e.endsWith(`.${a}`)},et=(t,r)=>{let e=new URL(r).protocol,a=new URL(t).protocol;return e===a};var pr=(0,$.promisify)(q.default.pipeline),w=Symbol("Body internals"),G=class{constructor(r,{size:e=0}={}){let a=null;r===null?r=null:we(r)?r=O.Buffer.from(r.toString()):pe(r)||O.Buffer.isBuffer(r)||($.types.isAnyArrayBuffer(r)?r=O.Buffer.from(r):ArrayBuffer.isView(r)?r=O.Buffer.from(r.buffer,r.byteOffset,r.byteLength):r instanceof q.default||(r instanceof h.FormData?(r=(0,h.formDataToBlob)(r),a=r.type.split("=")[1]):r=O.Buffer.from(String(r))));let n=r;O.Buffer.isBuffer(r)?n=q.default.Readable.from(r):pe(r)&&(n=q.default.Readable.from(r.stream())),this[w]={body:r,stream:n,boundary:a,disturbed:!1,error:null},this.size=e,r instanceof q.default&&r.on("error",o=>{let u=o instanceof Q?o:new T(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[w].error=u})}get body(){return this[w].stream}get bodyUsed(){return this[w].disturbed}async arrayBuffer(){let{buffer:r,byteOffset:e,byteLength:a}=await Le(this);return r.slice(e,e+a)}async formData(){let r=this.headers.get("content-type");if(r.startsWith("application/x-www-form-urlencoded")){let a=new h.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)a.append(o,u);return a}let{toFormData:e}=await Promise.resolve().then(()=>(nt(),rt));return e(this.body,r)}async blob(){let r=this.headers&&this.headers.get("content-type")||this[w].body&&this[w].body.type||"",e=await this.arrayBuffer();return new me.default([e],{type:r})}async json(){let r=await this.text();return JSON.parse(r)}async text(){let r=await Le(this);return new TextDecoder().decode(r)}buffer(){return Le(this)}};G.prototype.buffer=(0,$.deprecate)(G.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(G.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,$.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Le(t){if(t[w].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[w].disturbed=!0,t[w].error)throw t[w].error;let{body:r}=t;if(r===null)return O.Buffer.alloc(0);if(!(r instanceof q.default))return O.Buffer.alloc(0);let e=[],a=0;try{for await(let n of r){if(t.size>0&&a+n.length>t.size){let o=new T(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw r.destroy(o),o}a+=n.length,e.push(n)}}catch(n){throw n instanceof Q?n:new T(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(r.readableEnded===!0||r._readableState.ended===!0)try{return e.every(n=>typeof n=="string")?O.Buffer.from(e.join("")):O.Buffer.concat(e,a)}catch(n){throw new T(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new T(`Premature close of server response while trying to fetch ${t.url}`)}var ae=(t,r)=>{let e,a,{body:n}=t[w];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof q.default&&typeof n.getBoundary!="function"&&(e=new q.PassThrough({highWaterMark:r}),a=new q.PassThrough({highWaterMark:r}),n.pipe(e),n.pipe(a),t[w].stream=e,n=a),n},lr=(0,$.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ce=(t,r)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":we(t)?"application/x-www-form-urlencoded;charset=UTF-8":pe(t)?t.type||null:O.Buffer.isBuffer(t)||$.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof h.FormData?`multipart/form-data; boundary=${r[w].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${lr(t)}`:t instanceof q.default?null:"text/plain;charset=UTF-8",ot=t=>{let{body:r}=t[w];return r===null?0:pe(r)?r.size:O.Buffer.isBuffer(r)?r.length:r&&typeof r.getLengthSync=="function"&&r.hasKnownLength&&r.hasKnownLength()?r.getLengthSync():null},it=async(t,{body:r})=>{r===null?t.end():await pr(r,t)};var Ve=require("node:util"),ce=N(require("node:http"),1),fe=typeof ce.default.validateHeaderName=="function"?ce.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let r=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(r,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),r}},Ne=typeof ce.default.validateHeaderValue=="function"?ce.default.validateHeaderValue:(t,r)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(r)){let e=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_CHAR"}),e}},L=class t extends URLSearchParams{constructor(r){let e=[];if(r instanceof t){let a=r.raw();for(let[n,o]of Object.entries(a))e.push(...o.map(u=>[n,u]))}else if(r!=null)if(typeof r=="object"&&!Ve.types.isBoxedPrimitive(r)){let a=r[Symbol.iterator];if(a==null)e.push(...Object.entries(r));else{if(typeof a!="function")throw new TypeError("Header pairs must be iterable");e=[...r].map(n=>{if(typeof n!="object"||Ve.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return e=e.length>0?e.map(([a,n])=>(fe(a),Ne(a,String(n)),[String(a).toLowerCase(),String(n)])):void 0,super(e),new Proxy(this,{get(a,n,o){switch(n){case"append":case"set":return(u,S)=>(fe(u),Ne(u,String(S)),URLSearchParams.prototype[n].call(a,String(u).toLowerCase(),String(S)));case"delete":case"has":case"getAll":return u=>(fe(u),URLSearchParams.prototype[n].call(a,String(u).toLowerCase()));case"keys":return()=>(a.sort(),new Set(URLSearchParams.prototype.keys.call(a)).keys());default:return Reflect.get(a,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(r){let e=this.getAll(r);if(e.length===0)return null;let a=e.join(", ");return/^content-encoding$/i.test(r)&&(a=a.toLowerCase()),a}forEach(r,e=void 0){for(let a of this.keys())Reflect.apply(r,e,[this.get(a),a,this])}*values(){for(let r of this.keys())yield this.get(r)}*entries(){for(let r of this.keys())yield[r,this.get(r)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((r,e)=>(r[e]=this.getAll(e),r),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((r,e)=>{let a=this.getAll(e);return e==="host"?r[e]=a[0]:r[e]=a.length>1?a:a[0],r},{})}};Object.defineProperties(L.prototype,["get","entries","forEach","values"].reduce((t,r)=>(t[r]={enumerable:!0},t),{}));function st(t=[]){return new L(t.reduce((r,e,a,n)=>(a%2===0&&r.push(n.slice(a,a+2)),r),[]).filter(([r,e])=>{try{return fe(r),Ne(r,String(e)),!0}catch{return!1}}))}var cr=new Set([301,302,303,307,308]),De=t=>cr.has(t);var j=Symbol("Response internals"),F=class t extends G{constructor(r=null,e={}){super(r,e);let a=e.status!=null?e.status:200,n=new L(e.headers);if(r!==null&&!n.has("Content-Type")){let o=Ce(r,this);o&&n.append("Content-Type",o)}this[j]={type:"default",url:e.url,status:a,statusText:e.statusText||"",headers:n,counter:e.counter,highWaterMark:e.highWaterMark}}get type(){return this[j].type}get url(){return this[j].url||""}get status(){return this[j].status}get ok(){return this[j].status>=200&&this[j].status<300}get redirected(){return this[j].counter>0}get statusText(){return this[j].statusText}get headers(){return this[j].headers}get highWaterMark(){return this[j].highWaterMark}clone(){return new t(ae(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(r,e=302){if(!De(e))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(r).toString()},status:e})}static error(){let r=new t(null,{status:0,statusText:""});return r[j].type="error",r}static json(r=void 0,e={}){let a=JSON.stringify(r);if(a===void 0)throw new TypeError("data is not JSON serializable");let n=new L(e&&e.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(a,{...e,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(F.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var It=require("node:url"),Mt=require("node:util");var ut=t=>{if(t.search)return t.search;let r=t.href.length-1,e=t.hash||(t.href[r]==="#"?"#":"");return t.href[r-e.length]==="?"?"?":""};var lt=require("node:net");function pt(t,r=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",r&&(t.pathname="",t.search=""),t)}var ct=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),yt="strict-origin-when-cross-origin";function St(t){if(!ct.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function yr(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let r=t.host.replace(/(^\[)|(]$)/g,""),e=(0,lt.isIP)(r);return e===4&&/^127\./.test(r)||e===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(r)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function re(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:yr(t)}function dt(t,{referrerURLCallback:r,referrerOriginCallback:e}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let a=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=pt(n),u=pt(n,!0);o.toString().length>4096&&(o=u),r&&(o=r(o)),e&&(u=e(u));let S=new URL(t.url);switch(a){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return re(o)&&!re(S)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===S.origin?o:re(o)&&!re(S)?"no-referrer":u;case"same-origin":return o.origin===S.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===S.origin?o:u;case"no-referrer-when-downgrade":return re(o)&&!re(S)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${a}`)}}function bt(t){let r=(t.get("referrer-policy")||"").split(/[,\s]+/),e="";for(let a of r)a&&ct.has(a)&&(e=a);return e}var x=Symbol("Request internals"),ye=t=>typeof t=="object"&&typeof t[x]=="object",Sr=(0,Mt.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),X=class t extends G{constructor(r,e={}){let a;if(ye(r)?a=new URL(r.url):(a=new URL(r),r={}),a.username!==""||a.password!=="")throw new TypeError(`${a} is an url with embedded credentials.`);let n=e.method||r.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ye(e)&&"data"in e&&Sr(),(e.body!=null||ye(r)&&r.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=e.body?e.body:ye(r)&&r.body!==null?ae(r):null;super(o,{size:e.size||r.size||0});let u=new L(e.headers||r.headers||{});if(o!==null&&!u.has("Content-Type")){let y=Ce(o,this);y&&u.set("Content-Type",y)}let S=ye(r)?r.signal:null;if("signal"in e&&(S=e.signal),S!=null&&!Xe(S))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let l=e.referrer==null?r.referrer:e.referrer;if(l==="")l="no-referrer";else if(l){let y=new URL(l);l=/^about:(\/\/)?client$/.test(y)?"client":y}else l=void 0;this[x]={method:n,redirect:e.redirect||r.redirect||"follow",headers:u,parsedURL:a,signal:S,referrer:l},this.follow=e.follow===void 0?r.follow===void 0?20:r.follow:e.follow,this.compress=e.compress===void 0?r.compress===void 0?!0:r.compress:e.compress,this.counter=e.counter||r.counter||0,this.agent=e.agent||r.agent,this.highWaterMark=e.highWaterMark||r.highWaterMark||16384,this.insecureHTTPParser=e.insecureHTTPParser||r.insecureHTTPParser||!1,this.referrerPolicy=e.referrerPolicy||r.referrerPolicy||""}get method(){return this[x].method}get url(){return(0,It.format)(this[x].parsedURL)}get headers(){return this[x].headers}get redirect(){return this[x].redirect}get signal(){return this[x].signal}get referrer(){if(this[x].referrer==="no-referrer")return"";if(this[x].referrer==="client")return"about:client";if(this[x].referrer)return this[x].referrer.toString()}get referrerPolicy(){return this[x].referrerPolicy}set referrerPolicy(r){this[x].referrerPolicy=St(r)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(X.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var gt=t=>{let{parsedURL:r}=t[x],e=new L(t[x].headers);e.has("Accept")||e.set("Accept","*/*");let a=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(a="0"),t.body!==null){let S=ot(t);typeof S=="number"&&!Number.isNaN(S)&&(a=String(S))}a&&e.set("Content-Length",a),t.referrerPolicy===""&&(t.referrerPolicy=yt),t.referrer&&t.referrer!=="no-referrer"?t[x].referrer=dt(t):t[x].referrer="no-referrer",t[x].referrer instanceof URL&&e.set("Referer",t.referrer),e.has("User-Agent")||e.set("User-Agent","node-fetch"),t.compress&&!e.has("Accept-Encoding")&&e.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(r));let o=ut(r),u={path:r.pathname+o,method:t.method,headers:e[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:r,options:u}};var xe=class extends Q{constructor(r,e="aborted"){super(r,e)}};Re();Be();var dr=new Set(["data:","http:","https:"]);async function Ue(t,r){return new Promise((e,a)=>{let n=new X(t,r),{parsedURL:o,options:u}=gt(n);if(!dr.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let p=(0,ge.default)(n.url),A=new F(p,{headers:{"Content-Type":p.typeFull}});e(A);return}let S=(o.protocol==="https:"?Rt.default:mt.default).request,{signal:l}=n,y=null,R=()=>{let p=new xe("The operation was aborted.");a(p),n.body&&n.body instanceof V.default.Readable&&n.body.destroy(p),!(!y||!y.body)&&y.body.emit("error",p)};if(l&&l.aborted){R();return}let f=()=>{R(),b()},E=S(o.toString(),u);l&&l.addEventListener("abort",f);let b=()=>{E.abort(),l&&l.removeEventListener("abort",f)};E.on("error",p=>{a(new T(`request to ${n.url} failed, reason: ${p.message}`,"system",p)),b()}),br(E,p=>{y&&y.body&&y.body.destroy(p)}),process.version<"v14"&&E.on("socket",p=>{let A;p.prependListener("end",()=>{A=p._eventsCount}),p.prependListener("close",I=>{if(y&&A<p._eventsCount&&!I){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",y.body.emit("error",i)}})}),E.on("response",p=>{E.setTimeout(0);let A=st(p.rawHeaders);if(De(p.statusCode)){let g=A.get("Location"),_=null;try{_=g===null?null:new URL(g,n.url)}catch{if(n.redirect!=="manual"){a(new T(`uri requested responds with an invalid redirect URL: ${g}`,"invalid-redirect")),b();return}}switch(n.redirect){case"error":a(new T(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),b();return;case"manual":break;case"follow":{if(_===null)break;if(n.counter>=n.follow){a(new T(`maximum redirect reached at: ${n.url}`,"max-redirect")),b();return}let C={headers:new L(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ae(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Ze(n.url,_)||!et(n.url,_))for(let kt of["authorization","www-authenticate","cookie","cookie2"])C.headers.delete(kt);if(p.statusCode!==303&&n.body&&r.body instanceof V.default.Readable){a(new T("Cannot follow redirect with body being a readable stream","unsupported-redirect")),b();return}(p.statusCode===303||(p.statusCode===301||p.statusCode===302)&&n.method==="POST")&&(C.method="GET",C.body=void 0,C.headers.delete("content-length"));let ne=bt(A);ne&&(C.referrerPolicy=ne),e(Ue(new X(_,C))),b();return}default:return a(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}l&&p.once("end",()=>{l.removeEventListener("abort",f)});let I=(0,V.pipeline)(p,new V.PassThrough,g=>{g&&a(g)});process.version<"v12.10"&&p.on("aborted",f);let i={url:n.url,status:p.statusCode,statusText:p.statusMessage,headers:A,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},P=A.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||P===null||p.statusCode===204||p.statusCode===304){y=new F(I,i),e(y);return}let W={flush:Z.default.Z_SYNC_FLUSH,finishFlush:Z.default.Z_SYNC_FLUSH};if(P==="gzip"||P==="x-gzip"){I=(0,V.pipeline)(I,Z.default.createGunzip(W),g=>{g&&a(g)}),y=new F(I,i),e(y);return}if(P==="deflate"||P==="x-deflate"){let g=(0,V.pipeline)(p,new V.PassThrough,_=>{_&&a(_)});g.once("data",_=>{(_[0]&15)===8?I=(0,V.pipeline)(I,Z.default.createInflate(),C=>{C&&a(C)}):I=(0,V.pipeline)(I,Z.default.createInflateRaw(),C=>{C&&a(C)}),y=new F(I,i),e(y)}),g.once("end",()=>{y||(y=new F(I,i),e(y))});return}if(P==="br"){I=(0,V.pipeline)(I,Z.default.createBrotliDecompress(),g=>{g&&a(g)}),y=new F(I,i),e(y);return}y=new F(I,i),e(y)}),it(E,n).catch(a)})}function br(t,r){let e=Se.Buffer.from(`0\r
\r
`),a=!1,n=!1,o;t.on("response",u=>{let{headers:S}=u;a=S["transfer-encoding"]==="chunked"&&!S["content-length"]}),t.on("socket",u=>{let S=()=>{if(a&&!n){let y=new Error("Premature close");y.code="ERR_STREAM_PREMATURE_CLOSE",r(y)}},l=y=>{n=Se.Buffer.compare(y.slice(-5),e)===0,!n&&o&&(n=Se.Buffer.compare(o.slice(-3),e.slice(0,3))===0&&Se.Buffer.compare(y.slice(-2),e.slice(3))===0),o=y};u.prependListener("close",S),u.on("data",l),t.on("close",()=>{u.removeListener("close",S),u.removeListener("data",l)})})}var qe=null,Fe=null,ft=null,Ir=(0,Pt.getPreferenceValues)();function Mr({token:t,type:r}){let e=r==="personal"?`token ${t}`:`bearer ${t}`;ft=t,qe=Ye(new Ct.GraphQLClient("https://api.github.com/graphql",{headers:{authorization:e}})),Fe=new At.Octokit({auth:t,request:{fetch:Ue}})}var Dt=Et.OAuthService.github({personalAccessToken:Ir.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Mr});function xt(){if(!qe||!Fe)throw new Error("GitHub clients not initialized");return{github:qe,octokit:Fe,token:ft}}var _t=(0,Ut.withAccessToken)(Dt);var ke=require("@raycast/api"),de=require("@raycast/utils"),je=require("react"),Tt="my-stats-menu:stars-snapshot";async function vt(){let t=await ke.LocalStorage.getItem(Tt);if(!t)return null;try{let r=JSON.parse(t);return typeof r=="object"&&r!=null?r:null}catch{return null}}async function _e(t){await ke.LocalStorage.setItem(Tt,JSON.stringify(t))}function ht(t){return t.reduce((r,e)=>(r[e.id]=e.stargazerCount,r),{})}function wt(t,r){let{data:e,revalidate:a}=(0,de.useCachedPromise)(async(u,S)=>{if(!S||!u||u.length===0)return{totalNewStars:0,perRepoNew:[]};let l=await vt();if(l===null)return await _e(ht(u)),{totalNewStars:0,perRepoNew:[]};let y=[],R=0,f={...l},E=!1;for(let b of u){let p=l[b.id];if(p===void 0){f[b.id]=b.stargazerCount,E=!0;continue}let A=b.stargazerCount-p;A>0?(y.push({id:b.id,nameWithOwner:b.nameWithOwner,url:b.url,delta:A,current:b.stargazerCount}),R+=A):A<0&&(f[b.id]=b.stargazerCount,E=!0)}return E&&await _e(f),y.sort((b,p)=>p.delta-b.delta),{totalNewStars:R,perRepoNew:y}},[t,r],{execute:r,keepPreviousData:!0}),n=(0,je.useCallback)(async()=>{if(t)try{await _e(ht(t)),await a()}catch(u){await(0,de.showFailureToast)(u,{title:"Could not mark stars as seen"})}},[t,a]),o=(0,je.useCallback)(async u=>{if(t)try{let S=t.find(y=>y.id===u);if(!S)return;let l=await vt()??{};l[u]=S.stargazerCount,await _e(l),await a()}catch(S){await(0,de.showFailureToast)(S,{title:"Could not mark repository as seen"})}},[t,a]);return{totalNewStars:e?.totalNewStars??0,perRepoNew:e?.perRepoNew??[],markRepoSeen:o,markAllSeen:n}}var Vt=require("node:crypto"),ve=require("@raycast/api"),Nt=require("@raycast/utils"),qt=require("react");var Bt={"15m":900*1e3,"30m":1800*1e3,"1h":3600*1e3,"2h":7200*1e3},Ot="last-fetch-ms",Lt="last-result";function gr(t){return`my-stats-menu:${t?(0,Vt.createHash)("sha256").update(t).digest("hex").slice(0,12):"anonymous"}`}function Ft(){let{github:t,token:r}=xt(),{refreshFrequency:e}=(0,ve.getPreferenceValues)(),a=(0,qt.useMemo)(()=>new ve.Cache({namespace:gr(r)}),[r]),n=async()=>{let[{viewer:o,rateLimit:u},{viewer:S}]=await Promise.all([t.getViewerStats(),t.getViewerStatsDetails({repositoriesCount:100})]),l=S.ownedRepositories.nodes??[],y=l.reduce((i,P)=>i+(P?.stargazerCount??0),0),R=l.reduce((i,P)=>i+(P?.forkCount??0),0),f=o.ownedRepositories.totalCount>l.length,E=l.filter(i=>i!=null).map(i=>({id:i.id,nameWithOwner:i.nameWithOwner,url:i.url,stargazerCount:i.stargazerCount})),b=o.pullRequestsAuthored.totalCount,p=o.pullRequestsMerged.totalCount,A=b>0?Math.round(p/b*100):0,I={profile:{id:o.id,login:o.login,name:o.name,avatarUrl:o.avatarUrl,url:o.url,bio:o.bio,company:o.company,location:o.location,websiteUrl:o.websiteUrl,createdAt:o.createdAt},social:{followers:o.followers.totalCount,following:o.following.totalCount,starred:o.starredRepositories.totalCount,starsReceived:y,forksReceived:R,ownedReposPartial:f},activity:{prsAuthored:b,prsMerged:p,prsOpen:o.pullRequestsOpen.totalCount,mergeRate:A,issuesAuthored:o.issuesAuthored.totalCount,issuesOpen:o.issuesOpen.totalCount,commitsYear:o.contributionsCollection.totalCommitContributions},operational:{publicRepos:o.publicRepos.totalCount,ownedRepos:o.ownedRepositories.totalCount},organizations:S.organizations.nodes?.filter(i=>i!=null)??[],ownedReposBreakdown:E,recent:{pullRequests:(S.recentPullRequests.nodes??[]).filter(i=>i!=null),openPullRequests:(S.recentOpenPullRequests.nodes??[]).filter(i=>i!=null),issues:(S.recentIssues.nodes??[]).filter(i=>i!=null),openIssues:(S.recentOpenIssues.nodes??[]).filter(i=>i!=null)},rateLimit:u?{remaining:u.remaining,limit:u.limit,used:u.used,resetAt:u.resetAt}:null};return a.set(Ot,String(Date.now())),a.set(Lt,JSON.stringify(I)),I};return(0,Nt.useCachedPromise)(async()=>{let o=Bt[e??"30m"]??Bt["30m"],u=a.get(Ot),S=a.get(Lt);if(u&&S){let l=parseInt(u,10);if(Number.isFinite(l)&&Date.now()-l<o)try{return JSON.parse(S)}catch{}}return n()})}var d=require("react/jsx-runtime");function U(t){return t.toLocaleString()}function mr(t){let r=new Date(t);return Number.isNaN(r.getTime())?"soon":r.getTime()-Date.now()<=0?"now":`in ${(0,jt.formatDistanceToNowStrict)(r)}`}function Rr(t){switch(t){case"OPEN":return{source:"pull-request-open.svg",tintColor:s.Color.Green};case"MERGED":return{source:"pull-request-merged.svg",tintColor:s.Color.Purple};case"CLOSED":return{source:"pull-request-closed.svg",tintColor:s.Color.Red}}}function Ar(t){switch(t){case"OPEN":return{source:"issue-open.svg",tintColor:s.Color.Green};case"CLOSED":return{source:"issue-closed.svg",tintColor:s.Color.Red}}}function Pr(){let{titleMetric:t,useAvatarAsIcon:r,notifyOnNewStars:e}=(0,s.getPreferenceValues)(),{data:a,isLoading:n,error:o}=Ft(),{totalNewStars:u,perRepoNew:S,markRepoSeen:l,markAllSeen:y}=wt(a?.ownedReposBreakdown,e),R=i=>{if(a)switch(i){case"followers":return a.social.followers;case"stars":return a.social.starsReceived;case"prsOpen":return a.activity.prsOpen;case"issuesOpen":return a.activity.issuesOpen;case"none":return}},f=(()=>{if(e&&u>0)return`\u2605+${u}`;let i=R(t);return i===void 0?void 0:U(i)})(),E=a?.profile.login,b=a?.profile.url??(E?`https://github.com/${E}`:"https://github.com"),p=(i,P)=>`https://github.com/search?type=${i}&q=${encodeURIComponent(P)}`,A="Aggregated over the top 100 owned repositories by stars",I=r&&a?.profile.avatarUrl?{source:a.profile.avatarUrl,mask:s.Image.Mask.Circle}:{source:"github.svg",tintColor:s.Color.PrimaryText};return(0,d.jsxs)(Ge,{title:f,icon:I,tooltip:a?.profile.name?`${a.profile.name} (@${a.profile.login})`:"GitHub Stats",isLoading:n,error:o?.message,children:[a&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(H,{children:(0,d.jsx)(M,{title:a.profile.name??a.profile.login,subtitle:`@${a.profile.login}`,icon:{source:a.profile.avatarUrl,mask:s.Image.Mask.Circle},tooltip:a.profile.bio??void 0,onAction:()=>(0,s.open)(b)})}),e&&S.length>0&&(0,d.jsxs)(H,{title:`What's New \xB7 +${u} \u2605`,children:[S.map(i=>(0,d.jsx)(M,{title:i.nameWithOwner,subtitle:`+${i.delta} \u2605 (now ${U(i.current)})`,icon:{source:s.Icon.Star,tintColor:s.Color.Yellow},onAction:async()=>{await(0,s.open)(`${i.url}/stargazers`),await l(i.id)}},i.id)),(0,d.jsx)(M,{title:"Mark All as Seen",icon:s.Icon.Check,shortcut:{modifiers:["cmd"],key:"k"},onAction:y})]}),(0,d.jsxs)(H,{title:"Social",children:[(0,d.jsx)(M,{title:"Followers",subtitle:U(a.social.followers),icon:s.Icon.Person,onAction:()=>(0,s.open)(`${b}?tab=followers`)}),(0,d.jsx)(M,{title:"Following",subtitle:U(a.social.following),icon:s.Icon.PersonCircle,onAction:()=>(0,s.open)(`${b}?tab=following`)}),(0,d.jsx)(M,{title:"Stars Received",subtitle:a.social.ownedReposPartial?`${U(a.social.starsReceived)}+`:U(a.social.starsReceived),icon:s.Icon.Star,tooltip:a.social.ownedReposPartial?A:void 0,onAction:()=>(0,s.open)(`${b}?tab=repositories`)}),(0,d.jsx)(M,{title:"Starred Repositories",subtitle:U(a.social.starred),icon:s.Icon.Bookmark,onAction:()=>(0,s.open)(`${b}?tab=stars`)})]}),(0,d.jsxs)(H,{title:"Activity",children:[(0,d.jsxs)(te,{title:"PRs Authored",subtitle:U(a.activity.prsAuthored),icon:{source:"pull-request-open.svg",tintColor:s.Color.PrimaryText},children:[a.recent?.pullRequests&&a.recent.pullRequests.length>0?a.recent.pullRequests.map(i=>(0,d.jsx)(M,{title:`#${i.number} ${i.title}`,subtitle:i.repository.nameWithOwner,icon:Rr(i.state),onAction:()=>(0,s.open)(i.url)},i.id)):(0,d.jsx)(M,{title:"No recent pull requests",icon:s.Icon.Info}),(0,d.jsx)(M,{title:"View All Authored PRs",icon:s.Icon.MagnifyingGlass,onAction:()=>(0,s.open)(p("pullrequests",`is:pr author:${a.profile.login}`))})]}),(0,d.jsx)(M,{title:"PRs Merged",subtitle:`${U(a.activity.prsMerged)} (${a.activity.mergeRate}%)`,icon:{source:"pull-request-merged.svg",tintColor:s.Color.PrimaryText},tooltip:`${a.activity.mergeRate}% of authored PRs were merged`,onAction:()=>(0,s.open)(p("pullrequests",`is:pr is:merged author:${a.profile.login}`))}),(0,d.jsxs)(te,{title:"Issues Authored",subtitle:U(a.activity.issuesAuthored),icon:{source:"issue-open.svg",tintColor:s.Color.PrimaryText},children:[a.recent?.issues&&a.recent.issues.length>0?a.recent.issues.map(i=>(0,d.jsx)(M,{title:`#${i.number} ${i.title}`,subtitle:i.repository.nameWithOwner,icon:Ar(i.state),onAction:()=>(0,s.open)(i.url)},i.id)):(0,d.jsx)(M,{title:"No recent issues",icon:s.Icon.Info}),(0,d.jsx)(M,{title:"View All Authored Issues",icon:s.Icon.MagnifyingGlass,onAction:()=>(0,s.open)(p("issues",`is:issue author:${a.profile.login}`))})]}),(0,d.jsx)(M,{title:"Commits (last year)",subtitle:U(a.activity.commitsYear),icon:{source:"commit.svg",tintColor:s.Color.PrimaryText},onAction:()=>(0,s.open)(p("commits",`author:${a.profile.login}`))})]}),(0,d.jsxs)(H,{title:"Operational",children:[(0,d.jsx)(M,{title:"Public Repos",subtitle:U(a.operational.publicRepos),icon:s.Icon.Folder,onAction:()=>(0,s.open)(`${b}?tab=repositories`)}),(0,d.jsx)(M,{title:"Forks Received",subtitle:a.social.ownedReposPartial?`${U(a.social.forksReceived)}+`:U(a.social.forksReceived),icon:{source:"branch.svg",tintColor:s.Color.PrimaryText},tooltip:a.social.ownedReposPartial?A:void 0,onAction:()=>(0,s.open)(`${b}?tab=repositories`)}),(0,d.jsxs)(te,{title:"Open PRs",subtitle:U(a.activity.prsOpen),icon:{source:"pull-request-open.svg",tintColor:s.Color.Green},children:[a.recent?.openPullRequests&&a.recent.openPullRequests.length>0?a.recent.openPullRequests.map(i=>(0,d.jsx)(M,{title:`#${i.number} ${i.title}`,subtitle:i.repository.nameWithOwner,icon:{source:"pull-request-open.svg",tintColor:s.Color.Green},onAction:()=>(0,s.open)(i.url)},i.id)):(0,d.jsx)(M,{title:"No open pull requests",icon:s.Icon.Info}),(0,d.jsx)(M,{title:"View All Open PRs",icon:s.Icon.MagnifyingGlass,onAction:()=>(0,s.open)(p("pullrequests",`is:pr is:open author:${a.profile.login}`))})]}),(0,d.jsxs)(te,{title:"Open Issues",subtitle:U(a.activity.issuesOpen),icon:{source:"issue-open.svg",tintColor:s.Color.Green},children:[a.recent?.openIssues&&a.recent.openIssues.length>0?a.recent.openIssues.map(i=>(0,d.jsx)(M,{title:`#${i.number} ${i.title}`,subtitle:i.repository.nameWithOwner,icon:{source:"issue-open.svg",tintColor:s.Color.Green},onAction:()=>(0,s.open)(i.url)},i.id)):(0,d.jsx)(M,{title:"No open issues",icon:s.Icon.Info}),(0,d.jsx)(M,{title:"View All Open Issues",icon:s.Icon.MagnifyingGlass,onAction:()=>(0,s.open)(p("issues",`is:issue is:open author:${a.profile.login}`))})]})]}),a.organizations.length>0&&(0,d.jsx)(H,{title:"Organizations",children:a.organizations.map(i=>(0,d.jsxs)(te,{title:i.name??i.login,icon:{source:i.avatarUrl,mask:s.Image.Mask.Circle},children:[(0,d.jsx)(M,{title:"Open Profile",subtitle:`@${i.login}`,icon:s.Icon.Globe,onAction:()=>(0,s.open)(i.url)}),(0,d.jsx)(M,{title:"Repositories",icon:s.Icon.Folder,onAction:()=>(0,s.open)(`https://github.com/orgs/${i.login}/repositories`)}),(0,d.jsx)(M,{title:"People",icon:s.Icon.PersonCircle,onAction:()=>(0,s.open)(`https://github.com/orgs/${i.login}/people`)}),(0,d.jsx)(M,{title:"Projects",icon:s.Icon.Goal,onAction:()=>(0,s.open)(`https://github.com/orgs/${i.login}/projects`)})]},i.id))}),a.rateLimit&&(0,d.jsx)(H,{title:"API",children:(0,d.jsx)(M,{title:"Rate Limit",subtitle:`${U(a.rateLimit.remaining)} / ${U(a.rateLimit.limit)}`,icon:s.Icon.Gauge,tooltip:`Resets ${mr(a.rateLimit.resetAt)}`,onAction:()=>(0,s.open)("https://docs.github.com/en/rest/rate-limit")})})]}),(0,d.jsxs)(H,{children:[(0,d.jsx)(M,{title:"Open Profile on GitHub",icon:s.Icon.Globe,shortcut:s.Keyboard.Shortcut.Common.Open,onAction:()=>(0,s.open)(b)}),(0,d.jsx)(Qe,{})]})]})}var Er=_t(Pr);
