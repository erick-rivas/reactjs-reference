# Components

Handle component behavior (initialization, requests, render calls, etc)
>   *An equivalent to controller in MVC architecture*

## Examples

### List example

```javascript
function PlayerList(props){
  const qPlayers = useQuery(`
  {
    players {
      name
      isActive
      photo { }
      team { }
      position { }
    }
  }`);

  if (qPlayers.loading) return <Loading />;
  if (qPlayers.error) return "Error";
  const { players = [] } = qPlayers.data;

  return <View
    players={players}
  />;
}
```

### Form example

```javascript
function PlayerFormSave(props) {
  const { url } = props.match;
  const qTeams = useQuery(`{ teams { } }`);
  const qPlayerPositions = useQuery(`{ playerPositions { } }`);
  const [callSave, qSave] = useSave(queries.SAVE_PLAYER, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;
  const error = qSave.error ? "An error has occurred" : null

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