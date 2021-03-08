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
