# `googleVectorSearchIndex` Submodule <a name="`googleVectorSearchIndex` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchIndex <a name="GoogleVectorSearchIndex" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndex;

GoogleVectorSearchIndex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .indexField(java.lang.String)
    .indexId(java.lang.String)
    .location(java.lang.String)
//  .dedicatedInfrastructure(GoogleVectorSearchIndexDedicatedInfrastructure)
//  .deletionPolicy(java.lang.String)
//  .denseScann(GoogleVectorSearchIndexDenseScann)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .distanceMetric(java.lang.String)
//  .filterFields(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .storeFields(java.util.List<java.lang.String>)
//  .timeouts(GoogleVectorSearchIndexTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexField">indexField</a></code> | <code>java.lang.String</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexId">indexId</a></code> | <code>java.lang.String</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dedicatedInfrastructure">dedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.denseScann">denseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.distanceMetric">distanceMetric</a></code> | <code>java.lang.String</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.filterFields">filterFields</a></code> | <code>java.util.List<java.lang.String></code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.storeFields">storeFields</a></code> | <code>java.util.List<java.lang.String></code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `indexField`<sup>Required</sup> <a name="indexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexField"></a>

- *Type:* java.lang.String

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexId"></a>

- *Type:* java.lang.String

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `dedicatedInfrastructure`<sup>Optional</sup> <a name="dedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dedicatedInfrastructure"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `denseScann`<sup>Optional</sup> <a name="denseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.denseScann"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `distanceMetric`<sup>Optional</sup> <a name="distanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.distanceMetric"></a>

- *Type:* java.lang.String

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `filterFields`<sup>Optional</sup> <a name="filterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.filterFields"></a>

- *Type:* java.util.List<java.lang.String>

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `storeFields`<sup>Optional</sup> <a name="storeFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.storeFields"></a>

- *Type:* java.util.List<java.lang.String>

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure">putDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann">putDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure">resetDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann">resetDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric">resetDistanceMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields">resetFilterFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields">resetStoreFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDedicatedInfrastructure` <a name="putDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure"></a>

```java
public void putDedicatedInfrastructure(GoogleVectorSearchIndexDedicatedInfrastructure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `putDenseScann` <a name="putDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann"></a>

```java
public void putDenseScann(GoogleVectorSearchIndexDenseScann value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts"></a>

```java
public void putTimeouts(GoogleVectorSearchIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `resetDedicatedInfrastructure` <a name="resetDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure"></a>

```java
public void resetDedicatedInfrastructure()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDenseScann` <a name="resetDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann"></a>

```java
public void resetDenseScann()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDistanceMetric` <a name="resetDistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric"></a>

```java
public void resetDistanceMetric()
```

##### `resetFilterFields` <a name="resetFilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields"></a>

```java
public void resetFilterFields()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject"></a>

```java
public void resetProject()
```

##### `resetStoreFields` <a name="resetStoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields"></a>

```java
public void resetStoreFields()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndex;

GoogleVectorSearchIndex.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndex;

GoogleVectorSearchIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndex;

GoogleVectorSearchIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndex;

GoogleVectorSearchIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVectorSearchIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure">dedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann">denseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput">dedicatedInfrastructureInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput">denseScannInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput">distanceMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput">filterFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput">indexFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput">storeFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric">distanceMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields">filterFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField">indexField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields">storeFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dedicatedInfrastructure`<sup>Required</sup> <a name="dedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructureOutputReference getDedicatedInfrastructure();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `denseScann`<sup>Required</sup> <a name="denseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann"></a>

```java
public GoogleVectorSearchIndexDenseScannOutputReference getDenseScann();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts"></a>

```java
public GoogleVectorSearchIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `dedicatedInfrastructureInput`<sup>Optional</sup> <a name="dedicatedInfrastructureInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructure getDedicatedInfrastructureInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `denseScannInput`<sup>Optional</sup> <a name="denseScannInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput"></a>

```java
public GoogleVectorSearchIndexDenseScann getDenseScannInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `distanceMetricInput`<sup>Optional</sup> <a name="distanceMetricInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput"></a>

```java
public java.lang.String getDistanceMetricInput();
```

- *Type:* java.lang.String

---

##### `filterFieldsInput`<sup>Optional</sup> <a name="filterFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput"></a>

```java
public java.util.List<java.lang.String> getFilterFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexFieldInput`<sup>Optional</sup> <a name="indexFieldInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput"></a>

```java
public java.lang.String getIndexFieldInput();
```

- *Type:* java.lang.String

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storeFieldsInput`<sup>Optional</sup> <a name="storeFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput"></a>

```java
public java.util.List<java.lang.String> getStoreFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVectorSearchIndexTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric"></a>

```java
public java.lang.String getDistanceMetric();
```

- *Type:* java.lang.String

---

##### `filterFields`<sup>Required</sup> <a name="filterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields"></a>

```java
public java.util.List<java.lang.String> getFilterFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexField`<sup>Required</sup> <a name="indexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField"></a>

```java
public java.lang.String getIndexField();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `storeFields`<sup>Required</sup> <a name="storeFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields"></a>

```java
public java.util.List<java.lang.String> getStoreFields();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchIndexConfig <a name="GoogleVectorSearchIndexConfig" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexConfig;

GoogleVectorSearchIndexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .indexField(java.lang.String)
    .indexId(java.lang.String)
    .location(java.lang.String)
//  .dedicatedInfrastructure(GoogleVectorSearchIndexDedicatedInfrastructure)
//  .deletionPolicy(java.lang.String)
//  .denseScann(GoogleVectorSearchIndexDenseScann)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .distanceMetric(java.lang.String)
//  .filterFields(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .storeFields(java.util.List<java.lang.String>)
//  .timeouts(GoogleVectorSearchIndexTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField">indexField</a></code> | <code>java.lang.String</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId">indexId</a></code> | <code>java.lang.String</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure">dedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann">denseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric">distanceMetric</a></code> | <code>java.lang.String</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields">filterFields</a></code> | <code>java.util.List<java.lang.String></code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields">storeFields</a></code> | <code>java.util.List<java.lang.String></code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `indexField`<sup>Required</sup> <a name="indexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField"></a>

```java
public java.lang.String getIndexField();
```

- *Type:* java.lang.String

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `dedicatedInfrastructure`<sup>Optional</sup> <a name="dedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructure getDedicatedInfrastructure();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `denseScann`<sup>Optional</sup> <a name="denseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann"></a>

```java
public GoogleVectorSearchIndexDenseScann getDenseScann();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `distanceMetric`<sup>Optional</sup> <a name="distanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric"></a>

```java
public java.lang.String getDistanceMetric();
```

- *Type:* java.lang.String

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `filterFields`<sup>Optional</sup> <a name="filterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields"></a>

```java
public java.util.List<java.lang.String> getFilterFields();
```

- *Type:* java.util.List<java.lang.String>

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `storeFields`<sup>Optional</sup> <a name="storeFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields"></a>

```java
public java.util.List<java.lang.String> getStoreFields();
```

- *Type:* java.util.List<java.lang.String>

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts"></a>

```java
public GoogleVectorSearchIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

### GoogleVectorSearchIndexDedicatedInfrastructure <a name="GoogleVectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexDedicatedInfrastructure;

GoogleVectorSearchIndexDedicatedInfrastructure.builder()
//  .autoscalingSpec(GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">autoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode">mode</a></code> | <code>java.lang.String</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `autoscalingSpec`<sup>Optional</sup> <a name="autoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec getAutoscalingSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#autoscaling_spec GoogleVectorSearchIndex#autoscaling_spec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#mode GoogleVectorSearchIndex#mode}

---

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec;

GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.builder()
//  .maxReplicaCount(java.lang.Number)
//  .minReplicaCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | The minimum number of replicas. |

---

##### `maxReplicaCount`<sup>Optional</sup> <a name="maxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#max_replica_count GoogleVectorSearchIndex#max_replica_count}

---

##### `minReplicaCount`<sup>Optional</sup> <a name="minReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#min_replica_count GoogleVectorSearchIndex#min_replica_count}

---

### GoogleVectorSearchIndexDenseScann <a name="GoogleVectorSearchIndexDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexDenseScann;

GoogleVectorSearchIndexDenseScann.builder()
//  .featureNormType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType">featureNormType</a></code> | <code>java.lang.String</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `featureNormType`<sup>Optional</sup> <a name="featureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType"></a>

```java
public java.lang.String getFeatureNormType();
```

- *Type:* java.lang.String

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#feature_norm_type GoogleVectorSearchIndex#feature_norm_type}

---

### GoogleVectorSearchIndexTimeouts <a name="GoogleVectorSearchIndexTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexTimeouts;

GoogleVectorSearchIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference;

new GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">resetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">resetMinReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxReplicaCount` <a name="resetMaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```java
public void resetMaxReplicaCount()
```

##### `resetMinReplicaCount` <a name="resetMinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```java
public void resetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">maxReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">minReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```java
public java.lang.Number getMaxReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```java
public java.lang.Number getMinReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```java
public java.lang.Number getMaxReplicaCount();
```

- *Type:* java.lang.Number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```java
public java.lang.Number getMinReplicaCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### GoogleVectorSearchIndexDedicatedInfrastructureOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference;

new GoogleVectorSearchIndexDedicatedInfrastructureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">putAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">resetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingSpec` <a name="putAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```java
public void putAutoscalingSpec(GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `resetAutoscalingSpec` <a name="resetAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```java
public void resetAutoscalingSpec()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">autoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">autoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingSpec`<sup>Required</sup> <a name="autoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference getAutoscalingSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `autoscalingSpecInput`<sup>Optional</sup> <a name="autoscalingSpecInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec getAutoscalingSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```java
public GoogleVectorSearchIndexDedicatedInfrastructure getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---


### GoogleVectorSearchIndexDenseScannOutputReference <a name="GoogleVectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexDenseScannOutputReference;

new GoogleVectorSearchIndexDenseScannOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType">resetFeatureNormType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureNormType` <a name="resetFeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```java
public void resetFeatureNormType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">featureNormTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType">featureNormType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureNormTypeInput`<sup>Optional</sup> <a name="featureNormTypeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```java
public java.lang.String getFeatureNormTypeInput();
```

- *Type:* java.lang.String

---

##### `featureNormType`<sup>Required</sup> <a name="featureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```java
public java.lang.String getFeatureNormType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```java
public GoogleVectorSearchIndexDenseScann getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---


### GoogleVectorSearchIndexTimeoutsOutputReference <a name="GoogleVectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_index.GoogleVectorSearchIndexTimeoutsOutputReference;

new GoogleVectorSearchIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVectorSearchIndexTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---



