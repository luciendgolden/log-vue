# Fahrtenbuch Server

Der Server des Fahrtenbuch bildet das Backend mithilfe von `Node.js`,`Express` und einer `MongoDB` ab.

## Getting Started

Das Backend kann mit dem Befehl `node app.js` gestartet werden und mithilfe einer beliebigen **REST-API** aufgerufen werden. 

### Read

```
HTTP GET /api/vehicles?fields=x,y,z&access_token=?
```

### Create

```
HTTP POST /api
```

### Update

```
HTTP PUT /api/vehicle/123
```

### Delete

```
HTTP DELETE /api/vehicle/123
```