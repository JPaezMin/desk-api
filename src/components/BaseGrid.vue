<template>
  <div style="height: 500px">
    <ag-grid-vue
      style="width: 100%; height: 100%"
      :icons="icons"
      class="ag-theme-alpine"
      id="myGrid"
      :columnDefs="columnDefs.value"
      unSortIcon="true"
      :animateRows="true"
      :rowBuffer="0"
      :rowModelType="rowModelType"
      :maxBlocksInCache="2"
      :cacheBlockSize="10"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onBeforeMount, ref } from "vue";
import TicketService from "@/services/TicketService.js";
export default {
  components: {
    AgGridVue,
  },
  setup() {
    const columnDefs = reactive({
      value: [
        { valueGetter: "node.rowIndex", maxWidth: 100 },
        {
          field: "brandId",
          sortable: true,
          cellRenderer: (params) => {
            if (params.value !== undefined) {
              return params.value;
            } else {
              return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
            }
          },
        },
        { field: "channel", sortable: true },
        { field: "channelReferenceId", sortable: true },
        { field: "createdOn", sortable: true },
        { field: "status", sortable: true },
        { field: "subject", sortable: true },
      ],
    });
    const gridApi = ref(null);
    const gridColumnApi = ref(null);
    const rowModelType = ref(null);
    rowModelType.value = "infinite";
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
    };
    const icons = ref(null);

    const onGridReady = (params) => {
      gridApi.value = params.api;
      gridColumnApi.value = params.columnApi;
      params.api.sizeColumnsToFit();
      function createDataSource() {
        return {
          getRows: (params) => {
            const count = params.endRow - params.startRow; // or the cacheBlockSize
            const page = Math.ceil(params.endRow / count);
            console.log(`asking for page ${page} and count ${count}`);
            TicketService.fetchTickets(page, count)
              .then(function (response) {
                params.successCallback(
                  response.data.items,
                  response.data.totalCount
                );
              })
              .catch(function (error) {
                console.log(error);
              });
          },
        };
      }
      const datasource = createDataSource();
      params.api.setDatasource(datasource);
    };
    onBeforeMount(() => {
      icons.value = {
        sortAscending: '<i class="fas fa-sort-alpha-down text-blue-400"></i>',
        sortDescending: '<i class="fas fa-sort-alpha-up text-blue-400"></i>',
        sortUnSort: '<i class="fas fa-sort text-blue-400"></i>',
      };
    });
    return {
      onGridReady,
      gridApi,
      columnDefs,
      defaultColDef,
      icons,
      gridColumnApi,
      rowModelType,
    };
  },
};
</script>
<style lang="scss" scoped></style>
