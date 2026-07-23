# `googleVectorSearchIndex` Submodule <a name="`googleVectorSearchIndex` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchIndex <a name="GoogleVectorSearchIndex" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndex(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  index_field: str,
  index_id: str,
  location: str,
  dedicated_infrastructure: GoogleVectorSearchIndexDedicatedInfrastructure = None,
  deletion_policy: str = None,
  dense_scann: GoogleVectorSearchIndexDenseScann = None,
  description: str = None,
  display_name: str = None,
  distance_metric: str = None,
  filter_fields: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  store_fields: typing.List[str] = None,
  timeouts: GoogleVectorSearchIndexTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexField">index_field</a></code> | <code>str</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dedicatedInfrastructure">dedicated_infrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.denseScann">dense_scann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.description">description</a></code> | <code>str</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.distanceMetric">distance_metric</a></code> | <code>str</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.filterFields">filter_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.storeFields">store_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.collectionId"></a>

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexField"></a>

- *Type:* str

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.indexId"></a>

- *Type:* str

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `dedicated_infrastructure`<sup>Optional</sup> <a name="dedicated_infrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.dedicatedInfrastructure"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `dense_scann`<sup>Optional</sup> <a name="dense_scann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.denseScann"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.description"></a>

- *Type:* str

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.displayName"></a>

- *Type:* str

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `distance_metric`<sup>Optional</sup> <a name="distance_metric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.distanceMetric"></a>

- *Type:* str

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `filter_fields`<sup>Optional</sup> <a name="filter_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.filterFields"></a>

- *Type:* typing.List[str]

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `store_fields`<sup>Optional</sup> <a name="store_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.storeFields"></a>

- *Type:* typing.List[str]

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure">put_dedicated_infrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann">put_dense_scann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure">reset_dedicated_infrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann">reset_dense_scann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric">reset_distance_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields">reset_filter_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields">reset_store_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dedicated_infrastructure` <a name="put_dedicated_infrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure"></a>

```python
def put_dedicated_infrastructure(
  autoscaling_spec: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec = None,
  mode: str = None
) -> None
```

###### `autoscaling_spec`<sup>Optional</sup> <a name="autoscaling_spec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure.parameter.autoscalingSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#autoscaling_spec GoogleVectorSearchIndex#autoscaling_spec}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure.parameter.mode"></a>

- *Type:* str

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#mode GoogleVectorSearchIndex#mode}

---

##### `put_dense_scann` <a name="put_dense_scann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann"></a>

```python
def put_dense_scann(
  feature_norm_type: str = None
) -> None
```

###### `feature_norm_type`<sup>Optional</sup> <a name="feature_norm_type" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann.parameter.featureNormType"></a>

- *Type:* str

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#feature_norm_type GoogleVectorSearchIndex#feature_norm_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}.

---

##### `reset_dedicated_infrastructure` <a name="reset_dedicated_infrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure"></a>

```python
def reset_dedicated_infrastructure() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_dense_scann` <a name="reset_dense_scann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann"></a>

```python
def reset_dense_scann() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_distance_metric` <a name="reset_distance_metric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric"></a>

```python
def reset_distance_metric() -> None
```

##### `reset_filter_fields` <a name="reset_filter_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields"></a>

```python
def reset_filter_fields() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_store_fields` <a name="reset_store_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields"></a>

```python
def reset_store_fields() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndex.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVectorSearchIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure">dedicated_infrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann">dense_scann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput">dedicated_infrastructure_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput">dense_scann_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput">distance_metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput">filter_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput">index_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput">store_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric">distance_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields">filter_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField">index_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields">store_fields</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dedicated_infrastructure`<sup>Required</sup> <a name="dedicated_infrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure"></a>

```python
dedicated_infrastructure: GoogleVectorSearchIndexDedicatedInfrastructureOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `dense_scann`<sup>Required</sup> <a name="dense_scann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann"></a>

```python
dense_scann: GoogleVectorSearchIndexDenseScannOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts"></a>

```python
timeouts: GoogleVectorSearchIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `dedicated_infrastructure_input`<sup>Optional</sup> <a name="dedicated_infrastructure_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```python
dedicated_infrastructure_input: GoogleVectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `dense_scann_input`<sup>Optional</sup> <a name="dense_scann_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput"></a>

```python
dense_scann_input: GoogleVectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `distance_metric_input`<sup>Optional</sup> <a name="distance_metric_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput"></a>

```python
distance_metric_input: str
```

- *Type:* str

---

##### `filter_fields_input`<sup>Optional</sup> <a name="filter_fields_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput"></a>

```python
filter_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_field_input`<sup>Optional</sup> <a name="index_field_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput"></a>

```python
index_field_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `store_fields_input`<sup>Optional</sup> <a name="store_fields_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput"></a>

```python
store_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVectorSearchIndexTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distance_metric`<sup>Required</sup> <a name="distance_metric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric"></a>

```python
distance_metric: str
```

- *Type:* str

---

##### `filter_fields`<sup>Required</sup> <a name="filter_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields"></a>

```python
filter_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField"></a>

```python
index_field: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `store_fields`<sup>Required</sup> <a name="store_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields"></a>

```python
store_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchIndexConfig <a name="GoogleVectorSearchIndexConfig" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  index_field: str,
  index_id: str,
  location: str,
  dedicated_infrastructure: GoogleVectorSearchIndexDedicatedInfrastructure = None,
  deletion_policy: str = None,
  dense_scann: GoogleVectorSearchIndexDenseScann = None,
  description: str = None,
  display_name: str = None,
  distance_metric: str = None,
  filter_fields: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  store_fields: typing.List[str] = None,
  timeouts: GoogleVectorSearchIndexTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField">index_field</a></code> | <code>str</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId">index_id</a></code> | <code>str</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure">dedicated_infrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann">dense_scann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description">description</a></code> | <code>str</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric">distance_metric</a></code> | <code>str</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields">filter_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields">store_fields</a></code> | <code>typing.List[str]</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `index_field`<sup>Required</sup> <a name="index_field" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField"></a>

```python
index_field: str
```

- *Type:* str

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `dedicated_infrastructure`<sup>Optional</sup> <a name="dedicated_infrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```python
dedicated_infrastructure: GoogleVectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `dense_scann`<sup>Optional</sup> <a name="dense_scann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann"></a>

```python
dense_scann: GoogleVectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `distance_metric`<sup>Optional</sup> <a name="distance_metric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric"></a>

```python
distance_metric: str
```

- *Type:* str

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `filter_fields`<sup>Optional</sup> <a name="filter_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields"></a>

```python
filter_fields: typing.List[str]
```

- *Type:* typing.List[str]

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `store_fields`<sup>Optional</sup> <a name="store_fields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields"></a>

```python
store_fields: typing.List[str]
```

- *Type:* typing.List[str]

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts"></a>

```python
timeouts: GoogleVectorSearchIndexTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

### GoogleVectorSearchIndexDedicatedInfrastructure <a name="GoogleVectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure(
  autoscaling_spec: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">autoscaling_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode">mode</a></code> | <code>str</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `autoscaling_spec`<sup>Optional</sup> <a name="autoscaling_spec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```python
autoscaling_spec: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#autoscaling_spec GoogleVectorSearchIndex#autoscaling_spec}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#mode GoogleVectorSearchIndex#mode}

---

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec(
  max_replica_count: typing.Union[int, float] = None,
  min_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of replicas. |

---

##### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#max_replica_count GoogleVectorSearchIndex#max_replica_count}

---

##### `min_replica_count`<sup>Optional</sup> <a name="min_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#min_replica_count GoogleVectorSearchIndex#min_replica_count}

---

### GoogleVectorSearchIndexDenseScann <a name="GoogleVectorSearchIndexDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann(
  feature_norm_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType">feature_norm_type</a></code> | <code>str</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `feature_norm_type`<sup>Optional</sup> <a name="feature_norm_type" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType"></a>

```python
feature_norm_type: str
```

- *Type:* str

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#feature_norm_type GoogleVectorSearchIndex#feature_norm_type}

---

### GoogleVectorSearchIndexTimeouts <a name="GoogleVectorSearchIndexTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">reset_max_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">reset_min_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_replica_count` <a name="reset_max_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```python
def reset_max_replica_count() -> None
```

##### `reset_min_replica_count` <a name="reset_min_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```python
def reset_min_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">max_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">min_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_replica_count_input`<sup>Optional</sup> <a name="max_replica_count_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```python
max_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count_input`<sup>Optional</sup> <a name="min_replica_count_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```python
min_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### GoogleVectorSearchIndexDedicatedInfrastructureOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">put_autoscaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">reset_autoscaling_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_spec` <a name="put_autoscaling_spec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```python
def put_autoscaling_spec(
  max_replica_count: typing.Union[int, float] = None,
  min_replica_count: typing.Union[int, float] = None
) -> None
```

###### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.maxReplicaCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#max_replica_count GoogleVectorSearchIndex#max_replica_count}

---

###### `min_replica_count`<sup>Optional</sup> <a name="min_replica_count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.minReplicaCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.41.0/docs/resources/google_vector_search_index#min_replica_count GoogleVectorSearchIndex#min_replica_count}

---

##### `reset_autoscaling_spec` <a name="reset_autoscaling_spec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```python
def reset_autoscaling_spec() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">autoscaling_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">autoscaling_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_spec`<sup>Required</sup> <a name="autoscaling_spec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```python
autoscaling_spec: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `autoscaling_spec_input`<sup>Optional</sup> <a name="autoscaling_spec_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```python
autoscaling_spec_input: GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---


### GoogleVectorSearchIndexDenseScannOutputReference <a name="GoogleVectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType">reset_feature_norm_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feature_norm_type` <a name="reset_feature_norm_type" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```python
def reset_feature_norm_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">feature_norm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType">feature_norm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_norm_type_input`<sup>Optional</sup> <a name="feature_norm_type_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```python
feature_norm_type_input: str
```

- *Type:* str

---

##### `feature_norm_type`<sup>Required</sup> <a name="feature_norm_type" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```python
feature_norm_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---


### GoogleVectorSearchIndexTimeoutsOutputReference <a name="GoogleVectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_index

googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVectorSearchIndexTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---



