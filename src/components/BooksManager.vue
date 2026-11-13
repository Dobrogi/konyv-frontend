<script setup>
import { getBooks } from '../api/books';

</script>
<script>
export default {
    name: "BooksManager",
    data() {
        return {
            books: []
        }
    },
    methods: {
        async loadBooks() {
            this.books = await getBooks()
        }
    },
    mounted() {
        this.loadBooks()
    }
}
</script>

<template>
    <main class="flex justify-center items-center flex-col">
        <table class="">
            <thead class="flex justify-center items-center flex-col">
                <tr class="">
                <td class="">Azonosító</td>
                <td class="">Címe</td>
                <td class="">Szerző</td>
                <td class="">Megjelenítés éve</td>
                <td class="">Műveletek</td>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="book in books" :key="book.id" class="">
                    <td class="">{{ book.id }}</td>
                    <td class="">{{ book.title }}</td>
                    <td class="">{{ book.author }}</td>
                    <td class="">{{ book.year }}</td>
                    <td class="">-</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>