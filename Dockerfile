## default for angular server-rendering
FROM nikolaik/python-nodejs:python2.7-nodejs12 as buildContainer
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY . /app

## for Server Side rendering
RUN npm run build

WORKDIR /app

# Get all the code needed to run the app
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/dist /app/dist
COPY --from=buildContainer /app/node_modules /app/node_modules


# Expose the port the app runs in
EXPOSE 9000

# Serve the app
CMD ["npm", "run", "server"]
