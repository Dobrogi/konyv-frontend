<script setup>
import { createBook, getBooks } from '../api/books';

</script>
<script>
export default {
    name: "BooksManager",
    data() {
        return {
            books: [],
            newBook: {
                title: "",
                author: "",
                year: 2000
            }
        }
    },
    methods: {
        async loadBooks() {
            this.books = await getBooks()
        },
        async addBook(book){
            await createBook(book)
            await this.loadBooks()
        },
        async submitNewBook(){
            
        }


    },
    mounted() {
        this.loadBooks()
    }
}
</script>

<template>
    <main class="flex justify-center items-center flex-col">
        <h1>Book management</h1>
        <form class="flex bg-blue-950 flex-col border-blue-800 p-3 border-2 rounded-md">
            <div class="flex flex-col">
                <label for="title" class="">Címe:</label>
                <input v-model="this.newBook.title" class="outline-none border-blue-800 rounded-md border-2 p-3" name="title" type="text">
            </div>
            <div class="flex flex-col">
                <label for="author" class="">Szerző:</label>
                <input v-model="this.newBook.author" class="outline-none border-blue-800 rounded-md border-2 p-3" name="author" type="text">
            </div>
            <div class="flex flex-col">
                <label for="year" class="">Megjelenítés éve:</label>
                <input v-model="this.newBook.year" class="outline-none border-blue-800 rounded-md border-2 p-3" name="year" value="2000" min="2000" max="2026" type="number">
            </div>

            <button class="border-blue-800 rounded-md border-2 mt-3 hover:border-blue-600 hover:bg-blue-600 transition-all">Submit</button>
        </form>
        <table class="bg-blue-950 flex-col border-blue-800 p-3 border-2 rounded-md mt-3 ">
            <thead class="flex justify-center items-center flex-col w-6xl">
                <tr class="">
                    <td class="">Azonosító</td>
                    <td class="">Címe</td>
                    <td class="">Szerző</td>
                    <td class="">Megjelenítés éve</td>
                    <td class="">Műveletek</td>
                </tr>
            </thead>
            <tbody class="flex flex-col items-center justify-evenly w-6xl">
                <tr v-for="book in books" :key="book.id" class="flex items-center p-2">
                    <td class="">{{ book.id }}</td>
                    <td class="">{{ book.title }}</td>
                    <td class="">{{ book.author }}</td>
                    <td class="">{{ book.year }}</td>
                    <button class=" border-rose-600 rounded-lg p-1 bg-rose-900  hover:bg-rose-600 hover:border-rose-400 transition-all border-2">Törlés</button>
                </tr>
            </tbody>
        </table>
    </main>
</template>