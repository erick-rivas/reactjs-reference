# Components

Handle component logic (API calls, event definition, state handling, etc.)
>   *An equivalent to controller in a MVC architecture*

## Examples

### List example

```javascript
function PlayerList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  
  // Graphql call via react hooks
  const reqPlayers = usePagination(`
  {
    playerPagination {
      totalPages
      players {
        name
        isActive
        createdAt
        photo { }
        team { }
        position { }
      }
    }
  }`, pageNum, pageSize);

  if (reqPlayers.loading) return <Loading />;
  if (reqPlayers.error) return "Error";
  const { players = [], totalPages = 0 } = reqPlayers.data.playerPagination;

  // Event definition
  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  // Return view component with props binded
  return <View
    players={players}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}
```

### Form example

```javascript
function PlayerFormSave({ onCompleted = () => null, onError = () => null }) {

  const qTeams = useQuery(`{ teams { } }`);
  const qPlayerPositions = useQuery(`{ playerPositions { } }`);
  const [callSave, qSave] = useSave(SAVE_PLAYER, {
    onCompleted: () =>
      onCompleted()
  });
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;
  const error = qSave.error ? "An error has occurred" : null;
  
  // Event definition
  const onSubmit = (values) =>
    callSave(values);

  // Return view component with props binded
  return <View
    teams={teams}
    playerPositions={playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}
```