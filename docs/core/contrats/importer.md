# Importer 
On a ici la possiblité d'importer tous sorte de documents pour notre application

*
![Alt text](/public/importer.png)

*

![Alt text](/public/importer_importer.png)

*

```template
   <div class="d-flex justify-content-end mb-10">
        <label class="btn btn-sm btn-primary align-items-center">
          <i class="fad fa-file-import"></i>
          <input type="file" @change="importFile" class="hidden"
                 accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
          <template v-if="file">
            {{ file.name }}
          </template>
          <template v-else>
            Importer
          </template>
        </label>
    </div>



```