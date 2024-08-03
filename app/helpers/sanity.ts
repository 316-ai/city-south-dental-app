import {createClient} from '@sanity/client'

const Sanity = createClient({
  projectId: 'ysvjtnfl',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-05-25', // use current date (YYYY-MM-DD) to target the latest API version
  token: "skZrx0Pbd8ujGjZqFZMQeDQLEDBxAnqlZ7aPsgWg8jCWvYGyRXAn9gJhEROXMsy0z7lB7pvLqOJVPdDkHsvW0Bm7QOO08i70599FXLGzelJQuoferxopc3viQU3lH3ZZqbf19MI0MlpZdzEDkwBZ9VdWRNx3oGTfatX3HuqhgC053Rxt6sYH", // or leave blank to be anonymous user
})

export default Sanity;