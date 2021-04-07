# Components

Handle component behavior (initialization, requests, render calls, etc)
>   *An equivalent to controller in MVC architecture*

## Examples

### List example

```javascript
function PlayerList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
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

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

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

  const onSubmit = (values) =>
    callSave(values);

  return <View
    teams={teams}
    playerPositions={playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}
```