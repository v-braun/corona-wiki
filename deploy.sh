# prepare
REGISTRY="vbrps1acr.azurecr.io"
CURRENT_VERSION=$(jq .version package.json -r)
APP_NAME=$(jq .name package.json -r)
HOST_NAME="corona-wiki.org"

# build
docker build \
--build-arg HOST_NAME=$HOST_NAME \
. \
-t $REGISTRY/$APP_NAME:"latest" \
-t "$REGISTRY/$APP_NAME:$CURRENT_VERSION"

# auth
az acr login --name vbrps1acr --subscription fcc96ab7-d068-4336-9c46-a1ec93568084

# push
docker push $REGISTRY/$APP_NAME:"latest" 
docker push "$REGISTRY/$APP_NAME:$CURRENT_VERSION"

# install 
helm upgrade \
-i \
--set ingressRoute.host="$HOST_NAME" \
--set image.repository="$REGISTRY/$APP_NAME" \
--set image.tag="$CURRENT_VERSION" \
--wait \
$APP_NAME ./helm
