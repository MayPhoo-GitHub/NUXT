<template>
    <b-container>
        <b-row class="my-4">
            <b-col lg="5">
                <h2>Post List</h2>
            </b-col>
            <b-col>
                <b-form
                    v-if="show"
                    inline
                    class="justify-content-around"
                    @submit="onSubmitSearch"
                >
                    <b-form-group
                        id="input-group-search"
                        label-for="input-search"
                    >
                        <b-form-input
                            id="input-search"
                            v-model="form.searchParam"
                            type="text"
                            placeholder="Search keyword"
                        ></b-form-input>
                    </b-form-group>
                    <b-button
                        type="submit"
                        variant="primary"
                        class="text-uppercase"
                    >
                        Filter
                    </b-button>
                    <b-button variant="primary" class="text-uppercase">
                        Create
                    </b-button>
                    <b-button variant="primary" class="text-uppercase">
                        Upload
                    </b-button>
                    <b-button variant="primary" class="text-uppercase">
                        Download
                    </b-button>
                </b-form>
            </b-col>
        </b-row>
        <b-table
            id="post-table"
            :fields="fields"
            :items="showList"
            :per-page="perPage"
            :current-page="currentPage"
            primary-key="id"
            sticky-header
            show-empty
            hover
        >
            <template #cell(title)="row">
                <NuxtLink
                    :to="{
                        name: 'post-detail-id',
                        params: { id: row.item.id },
                    }"
                >
                    {{ row.item.title }}
                </NuxtLink>
            </template>
            <template #cell(operation)="row">
                <b-button
                    class="mr-1"
                    size="sm"
                    @click="info(row.item, row.index, $event.target)"
                >
                    Details
                </b-button>
                <b-button
                    class="mr-1"
                    size="sm"
                    @click="edit(row.item, row.index, $event.target)"
                >
                    Edit
                </b-button>
                <b-button
                    class="mr-1"
                    size="sm"
                    @click="remove(row.item, row.index, $event.target)"
                >
                    Delete
                </b-button>
            </template>
        </b-table>
        <!-- Pagination -->
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
            aria-controls="post-table"
        ></b-pagination>
        <!-- Info modal -->
        <b-modal
            :id="infoModal.id"
            :title="infoModal.title"
            ok-only
            @hide="resetInfoModal"
        >
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
    </b-container>
</template>

<script src="~/services/pages/post/post-list.js"></script>

<style scoped src="~/assets/css/pages/post/post-list.css"></style>
