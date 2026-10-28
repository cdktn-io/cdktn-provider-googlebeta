# `googleVertexAiRagFile` Submodule <a name="`googleVertexAiRagFile` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagFile <a name="GoogleVertexAiRagFile" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file google_vertex_ai_rag_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rag_corpus: str,
  region: str,
  deletion_policy: str = None,
  gcs_source: GoogleVertexAiRagFileGcsSource = None,
  google_drive_source: GoogleVertexAiRagFileGoogleDriveSource = None,
  id: str = None,
  max_embedding_requests_per_min: typing.Union[int, float] = None,
  project: str = None,
  rag_file_parsing_config: GoogleVertexAiRagFileRagFileParsingConfig = None,
  rag_file_transformation_config: GoogleVertexAiRagFileRagFileTransformationConfig = None,
  timeouts: GoogleVertexAiRagFileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragCorpus">rag_corpus</a></code> | <code>str</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.gcsSource">gcs_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.googleDriveSource">google_drive_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.maxEmbeddingRequestsPerMin">max_embedding_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileParsingConfig">rag_file_parsing_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileTransformationConfig">rag_file_transformation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rag_corpus`<sup>Required</sup> <a name="rag_corpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragCorpus"></a>

- *Type:* str

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_corpus GoogleVertexAiRagFile#rag_corpus}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.region"></a>

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#region GoogleVertexAiRagFile#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#deletion_policy GoogleVertexAiRagFile#deletion_policy}

---

##### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.gcsSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#gcs_source GoogleVertexAiRagFile#gcs_source}

---

##### `google_drive_source`<sup>Optional</sup> <a name="google_drive_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.googleDriveSource"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#google_drive_source GoogleVertexAiRagFile#google_drive_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_embedding_requests_per_min`<sup>Optional</sup> <a name="max_embedding_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.maxEmbeddingRequestsPerMin"></a>

- *Type:* typing.Union[int, float]

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_embedding_requests_per_min GoogleVertexAiRagFile#max_embedding_requests_per_min}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}.

---

##### `rag_file_parsing_config`<sup>Optional</sup> <a name="rag_file_parsing_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileParsingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_parsing_config GoogleVertexAiRagFile#rag_file_parsing_config}

---

##### `rag_file_transformation_config`<sup>Optional</sup> <a name="rag_file_transformation_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.ragFileTransformationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_transformation_config GoogleVertexAiRagFile#rag_file_transformation_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#timeouts GoogleVertexAiRagFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource">put_gcs_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource">put_google_drive_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig">put_rag_file_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig">put_rag_file_transformation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGcsSource">reset_gcs_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGoogleDriveSource">reset_google_drive_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetMaxEmbeddingRequestsPerMin">reset_max_embedding_requests_per_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileParsingConfig">reset_rag_file_parsing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileTransformationConfig">reset_rag_file_transformation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gcs_source` <a name="put_gcs_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource"></a>

```python
def put_gcs_source(
  uris: typing.List[str]
) -> None
```

###### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGcsSource.parameter.uris"></a>

- *Type:* typing.List[str]

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#uris GoogleVertexAiRagFile#uris}

---

##### `put_google_drive_source` <a name="put_google_drive_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource"></a>

```python
def put_google_drive_source(
  resource_ids: GoogleVertexAiRagFileGoogleDriveSourceResourceIds
) -> None
```

###### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putGoogleDriveSource.parameter.resourceIds"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_ids GoogleVertexAiRagFile#resource_ids}

---

##### `put_rag_file_parsing_config` <a name="put_rag_file_parsing_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig"></a>

```python
def put_rag_file_parsing_config(
  layout_parser: GoogleVertexAiRagFileRagFileParsingConfigLayoutParser = None,
  llm_parser: GoogleVertexAiRagFileRagFileParsingConfigLlmParser = None
) -> None
```

###### `layout_parser`<sup>Optional</sup> <a name="layout_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig.parameter.layoutParser"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#layout_parser GoogleVertexAiRagFile#layout_parser}

---

###### `llm_parser`<sup>Optional</sup> <a name="llm_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileParsingConfig.parameter.llmParser"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#llm_parser GoogleVertexAiRagFile#llm_parser}

---

##### `put_rag_file_transformation_config` <a name="put_rag_file_transformation_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig"></a>

```python
def put_rag_file_transformation_config(
  rag_file_chunking_config: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig = None
) -> None
```

###### `rag_file_chunking_config`<sup>Optional</sup> <a name="rag_file_chunking_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putRagFileTransformationConfig.parameter.ragFileChunkingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_chunking_config GoogleVertexAiRagFile#rag_file_chunking_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_gcs_source` <a name="reset_gcs_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGcsSource"></a>

```python
def reset_gcs_source() -> None
```

##### `reset_google_drive_source` <a name="reset_google_drive_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetGoogleDriveSource"></a>

```python
def reset_google_drive_source() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_embedding_requests_per_min` <a name="reset_max_embedding_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetMaxEmbeddingRequestsPerMin"></a>

```python
def reset_max_embedding_requests_per_min() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rag_file_parsing_config` <a name="reset_rag_file_parsing_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileParsingConfig"></a>

```python
def reset_rag_file_parsing_config() -> None
```

##### `reset_rag_file_transformation_config` <a name="reset_rag_file_transformation_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetRagFileTransformationConfig"></a>

```python
def reset_rag_file_transformation_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiRagFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiRagFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiRagFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fileStatus">file_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList">GoogleVertexAiRagFileFileStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSource">gcs_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference">GoogleVertexAiRagFileGcsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSource">google_drive_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference">GoogleVertexAiRagFileGoogleDriveSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfig">rag_file_parsing_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference">GoogleVertexAiRagFileRagFileParsingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfig">rag_file_transformation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference">GoogleVertexAiRagFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.userMetadata">user_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSourceInput">gcs_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSourceInput">google_drive_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMinInput">max_embedding_requests_per_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpusInput">rag_corpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfigInput">rag_file_parsing_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfigInput">rag_file_transformation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMin">max_embedding_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpus">rag_corpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `file_status`<sup>Required</sup> <a name="file_status" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.fileStatus"></a>

```python
file_status: GoogleVertexAiRagFileFileStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList">GoogleVertexAiRagFileFileStatusList</a>

---

##### `gcs_source`<sup>Required</sup> <a name="gcs_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSource"></a>

```python
gcs_source: GoogleVertexAiRagFileGcsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference">GoogleVertexAiRagFileGcsSourceOutputReference</a>

---

##### `google_drive_source`<sup>Required</sup> <a name="google_drive_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSource"></a>

```python
google_drive_source: GoogleVertexAiRagFileGoogleDriveSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference">GoogleVertexAiRagFileGoogleDriveSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rag_file_parsing_config`<sup>Required</sup> <a name="rag_file_parsing_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfig"></a>

```python
rag_file_parsing_config: GoogleVertexAiRagFileRagFileParsingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference">GoogleVertexAiRagFileRagFileParsingConfigOutputReference</a>

---

##### `rag_file_transformation_config`<sup>Required</sup> <a name="rag_file_transformation_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfig"></a>

```python
rag_file_transformation_config: GoogleVertexAiRagFileRagFileTransformationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeouts"></a>

```python
timeouts: GoogleVertexAiRagFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference">GoogleVertexAiRagFileTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `user_metadata`<sup>Required</sup> <a name="user_metadata" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.userMetadata"></a>

```python
user_metadata: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gcs_source_input`<sup>Optional</sup> <a name="gcs_source_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.gcsSourceInput"></a>

```python
gcs_source_input: GoogleVertexAiRagFileGcsSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---

##### `google_drive_source_input`<sup>Optional</sup> <a name="google_drive_source_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.googleDriveSourceInput"></a>

```python
google_drive_source_input: GoogleVertexAiRagFileGoogleDriveSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_embedding_requests_per_min_input`<sup>Optional</sup> <a name="max_embedding_requests_per_min_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMinInput"></a>

```python
max_embedding_requests_per_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rag_corpus_input`<sup>Optional</sup> <a name="rag_corpus_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpusInput"></a>

```python
rag_corpus_input: str
```

- *Type:* str

---

##### `rag_file_parsing_config_input`<sup>Optional</sup> <a name="rag_file_parsing_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileParsingConfigInput"></a>

```python
rag_file_parsing_config_input: GoogleVertexAiRagFileRagFileParsingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---

##### `rag_file_transformation_config_input`<sup>Optional</sup> <a name="rag_file_transformation_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragFileTransformationConfigInput"></a>

```python
rag_file_transformation_config_input: GoogleVertexAiRagFileRagFileTransformationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiRagFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_embedding_requests_per_min`<sup>Required</sup> <a name="max_embedding_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.maxEmbeddingRequestsPerMin"></a>

```python
max_embedding_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rag_corpus`<sup>Required</sup> <a name="rag_corpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.ragCorpus"></a>

```python
rag_corpus: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagFileConfig <a name="GoogleVertexAiRagFileConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rag_corpus: str,
  region: str,
  deletion_policy: str = None,
  gcs_source: GoogleVertexAiRagFileGcsSource = None,
  google_drive_source: GoogleVertexAiRagFileGoogleDriveSource = None,
  id: str = None,
  max_embedding_requests_per_min: typing.Union[int, float] = None,
  project: str = None,
  rag_file_parsing_config: GoogleVertexAiRagFileRagFileParsingConfig = None,
  rag_file_transformation_config: GoogleVertexAiRagFileRagFileTransformationConfig = None,
  timeouts: GoogleVertexAiRagFileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragCorpus">rag_corpus</a></code> | <code>str</code> | The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.gcsSource">gcs_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | gcs_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.googleDriveSource">google_drive_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | google_drive_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin">max_embedding_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileParsingConfig">rag_file_parsing_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | rag_file_parsing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileTransformationConfig">rag_file_transformation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | rag_file_transformation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rag_corpus`<sup>Required</sup> <a name="rag_corpus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragCorpus"></a>

```python
rag_corpus: str
```

- *Type:* str

The ID of the RagCorpus to import the file into, for example the 'name' attribute of a 'google_vertex_ai_rag_corpus' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_corpus GoogleVertexAiRagFile#rag_corpus}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#region GoogleVertexAiRagFile#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#deletion_policy GoogleVertexAiRagFile#deletion_policy}

---

##### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.gcsSource"></a>

```python
gcs_source: GoogleVertexAiRagFileGcsSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

gcs_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#gcs_source GoogleVertexAiRagFile#gcs_source}

---

##### `google_drive_source`<sup>Optional</sup> <a name="google_drive_source" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.googleDriveSource"></a>

```python
google_drive_source: GoogleVertexAiRagFileGoogleDriveSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

google_drive_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#google_drive_source GoogleVertexAiRagFile#google_drive_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#id GoogleVertexAiRagFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_embedding_requests_per_min`<sup>Optional</sup> <a name="max_embedding_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.maxEmbeddingRequestsPerMin"></a>

```python
max_embedding_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of queries per minute that the import is allowed to make to the embedding model specified on the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_embedding_requests_per_min GoogleVertexAiRagFile#max_embedding_requests_per_min}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#project GoogleVertexAiRagFile#project}.

---

##### `rag_file_parsing_config`<sup>Optional</sup> <a name="rag_file_parsing_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileParsingConfig"></a>

```python
rag_file_parsing_config: GoogleVertexAiRagFileRagFileParsingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

rag_file_parsing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_parsing_config GoogleVertexAiRagFile#rag_file_parsing_config}

---

##### `rag_file_transformation_config`<sup>Optional</sup> <a name="rag_file_transformation_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.ragFileTransformationConfig"></a>

```python
rag_file_transformation_config: GoogleVertexAiRagFileRagFileTransformationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

rag_file_transformation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_transformation_config GoogleVertexAiRagFile#rag_file_transformation_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiRagFileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#timeouts GoogleVertexAiRagFile#timeouts}

---

### GoogleVertexAiRagFileFileStatus <a name="GoogleVertexAiRagFileFileStatus" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus()
```


### GoogleVertexAiRagFileGcsSource <a name="GoogleVertexAiRagFileGcsSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource(
  uris: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.property.uris">uris</a></code> | <code>typing.List[str]</code> | The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile. |

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

The Cloud Storage URI of the file to import, for example 'gs://my-bucket/my-file.pdf'. Must reference a single file; directories and wildcards are not supported because each resource manages one RagFile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#uris GoogleVertexAiRagFile#uris}

---

### GoogleVertexAiRagFileGoogleDriveSource <a name="GoogleVertexAiRagFileGoogleDriveSource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource(
  resource_ids: GoogleVertexAiRagFileGoogleDriveSourceResourceIds
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.property.resourceIds">resource_ids</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | resource_ids block. |

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource.property.resourceIds"></a>

```python
resource_ids: GoogleVertexAiRagFileGoogleDriveSourceResourceIds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

resource_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_ids GoogleVertexAiRagFile#resource_ids}

---

### GoogleVertexAiRagFileGoogleDriveSourceResourceIds <a name="GoogleVertexAiRagFileGoogleDriveSourceResourceIds" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds(
  resource_id: str,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId">resource_id</a></code> | <code>str</code> | The ID of the Google Drive file. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType">resource_type</a></code> | <code>str</code> | The type of the Google Drive resource. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_id GoogleVertexAiRagFile#resource_id}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_type GoogleVertexAiRagFile#resource_type}

---

### GoogleVertexAiRagFileRagFileParsingConfig <a name="GoogleVertexAiRagFileRagFileParsingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig(
  layout_parser: GoogleVertexAiRagFileRagFileParsingConfigLayoutParser = None,
  llm_parser: GoogleVertexAiRagFileRagFileParsingConfigLlmParser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.layoutParser">layout_parser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | layout_parser block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.llmParser">llm_parser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | llm_parser block. |

---

##### `layout_parser`<sup>Optional</sup> <a name="layout_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.layoutParser"></a>

```python
layout_parser: GoogleVertexAiRagFileRagFileParsingConfigLayoutParser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

layout_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#layout_parser GoogleVertexAiRagFile#layout_parser}

---

##### `llm_parser`<sup>Optional</sup> <a name="llm_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig.property.llmParser"></a>

```python
llm_parser: GoogleVertexAiRagFileRagFileParsingConfigLlmParser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

llm_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#llm_parser GoogleVertexAiRagFile#llm_parser}

---

### GoogleVertexAiRagFileRagFileParsingConfigLayoutParser <a name="GoogleVertexAiRagFileRagFileParsingConfigLayoutParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser(
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  processor_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of requests the job is allowed to make to the Document AI processor per minute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName">processor_name</a></code> | <code>str</code> | The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'. |

---

##### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

##### `processor_name`<sup>Optional</sup> <a name="processor_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser.property.processorName"></a>

```python
processor_name: str
```

- *Type:* str

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#processor_name GoogleVertexAiRagFile#processor_name}

---

### GoogleVertexAiRagFileRagFileParsingConfigLlmParser <a name="GoogleVertexAiRagFileRagFileParsingConfigLlmParser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser(
  custom_parsing_prompt: str = None,
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  model_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt">custom_parsing_prompt</a></code> | <code>str</code> | The prompt to use for parsing. If not specified, a default prompt is used. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | The maximum number of requests the job is allowed to make to the LLM model per minute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.modelName">model_name</a></code> | <code>str</code> | The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'. |

---

##### `custom_parsing_prompt`<sup>Optional</sup> <a name="custom_parsing_prompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.customParsingPrompt"></a>

```python
custom_parsing_prompt: str
```

- *Type:* str

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#custom_parsing_prompt GoogleVertexAiRagFile#custom_parsing_prompt}

---

##### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#model_name GoogleVertexAiRagFile#model_name}

---

### GoogleVertexAiRagFileRagFileTransformationConfig <a name="GoogleVertexAiRagFileRagFileTransformationConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig(
  rag_file_chunking_config: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig">rag_file_chunking_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | rag_file_chunking_config block. |

---

##### `rag_file_chunking_config`<sup>Optional</sup> <a name="rag_file_chunking_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig.property.ragFileChunkingConfig"></a>

```python
rag_file_chunking_config: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

rag_file_chunking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#rag_file_chunking_config GoogleVertexAiRagFile#rag_file_chunking_config}

---

### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig(
  fixed_length_chunking: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking">fixed_length_chunking</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | fixed_length_chunking block. |

---

##### `fixed_length_chunking`<sup>Optional</sup> <a name="fixed_length_chunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig.property.fixedLengthChunking"></a>

```python
fixed_length_chunking: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#fixed_length_chunking GoogleVertexAiRagFile#fixed_length_chunking}

---

### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking(
  chunk_overlap: typing.Union[int, float] = None,
  chunk_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | The overlap between chunks. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | The size of the chunks. |

---

##### `chunk_overlap`<sup>Optional</sup> <a name="chunk_overlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_overlap GoogleVertexAiRagFile#chunk_overlap}

---

##### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_size GoogleVertexAiRagFile#chunk_size}

---

### GoogleVertexAiRagFileTimeouts <a name="GoogleVertexAiRagFileTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#create GoogleVertexAiRagFile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#delete GoogleVertexAiRagFile#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagFileFileStatusList <a name="GoogleVertexAiRagFileFileStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiRagFileFileStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiRagFileFileStatusOutputReference <a name="GoogleVertexAiRagFileFileStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.errorStatus">error_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus">GoogleVertexAiRagFileFileStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.errorStatus"></a>

```python
error_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileFileStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileFileStatus">GoogleVertexAiRagFileFileStatus</a>

---


### GoogleVertexAiRagFileGcsSourceOutputReference <a name="GoogleVertexAiRagFileGcsSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileGcsSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGcsSource">GoogleVertexAiRagFileGcsSource</a>

---


### GoogleVertexAiRagFileGoogleDriveSourceOutputReference <a name="GoogleVertexAiRagFileGoogleDriveSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds">put_resource_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_ids` <a name="put_resource_ids" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds"></a>

```python
def put_resource_ids(
  resource_id: str,
  resource_type: str = None
) -> None
```

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.resourceId"></a>

- *Type:* str

The ID of the Google Drive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_id GoogleVertexAiRagFile#resource_id}

---

###### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.putResourceIds.parameter.resourceType"></a>

- *Type:* str

The type of the Google Drive resource.

Only individual files are
supported because each resource manages one RagFile. Default value: "RESOURCE_TYPE_FILE" Possible values: ["RESOURCE_TYPE_FILE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#resource_type GoogleVertexAiRagFile#resource_type}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds">resource_ids</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput">resource_ids_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIds"></a>

```python
resource_ids: GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference">GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference</a>

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.resourceIdsInput"></a>

```python
resource_ids_input: GoogleVertexAiRagFileGoogleDriveSourceResourceIds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileGoogleDriveSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSource">GoogleVertexAiRagFileGoogleDriveSource</a>

---


### GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference <a name="GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileGoogleDriveSourceResourceIds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileGoogleDriveSourceResourceIds">GoogleVertexAiRagFileGoogleDriveSourceResourceIds</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin">reset_max_parsing_requests_per_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName">reset_processor_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_parsing_requests_per_min` <a name="reset_max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```python
def reset_max_parsing_requests_per_min() -> None
```

##### `reset_processor_name` <a name="reset_processor_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.resetProcessorName"></a>

```python
def reset_processor_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput">max_parsing_requests_per_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput">processor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName">processor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min_input`<sup>Optional</sup> <a name="max_parsing_requests_per_min_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```python
max_parsing_requests_per_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_name_input`<sup>Optional</sup> <a name="processor_name_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorNameInput"></a>

```python
processor_name_input: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min`<sup>Required</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_name`<sup>Required</sup> <a name="processor_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.processorName"></a>

```python
processor_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileRagFileParsingConfigLayoutParser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt">reset_custom_parsing_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin">reset_max_parsing_requests_per_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName">reset_model_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_parsing_prompt` <a name="reset_custom_parsing_prompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetCustomParsingPrompt"></a>

```python
def reset_custom_parsing_prompt() -> None
```

##### `reset_max_parsing_requests_per_min` <a name="reset_max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetMaxParsingRequestsPerMin"></a>

```python
def reset_max_parsing_requests_per_min() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.resetModelName"></a>

```python
def reset_model_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput">custom_parsing_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput">max_parsing_requests_per_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt">custom_parsing_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin">max_parsing_requests_per_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_parsing_prompt_input`<sup>Optional</sup> <a name="custom_parsing_prompt_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPromptInput"></a>

```python
custom_parsing_prompt_input: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min_input`<sup>Optional</sup> <a name="max_parsing_requests_per_min_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMinInput"></a>

```python
max_parsing_requests_per_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `custom_parsing_prompt`<sup>Required</sup> <a name="custom_parsing_prompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.customParsingPrompt"></a>

```python
custom_parsing_prompt: str
```

- *Type:* str

---

##### `max_parsing_requests_per_min`<sup>Required</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.maxParsingRequestsPerMin"></a>

```python
max_parsing_requests_per_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileRagFileParsingConfigLlmParser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---


### GoogleVertexAiRagFileRagFileParsingConfigOutputReference <a name="GoogleVertexAiRagFileRagFileParsingConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser">put_layout_parser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser">put_llm_parser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser">reset_layout_parser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser">reset_llm_parser</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layout_parser` <a name="put_layout_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser"></a>

```python
def put_layout_parser(
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  processor_name: str = None
) -> None
```

###### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.maxParsingRequestsPerMin"></a>

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the Document AI processor per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

###### `processor_name`<sup>Optional</sup> <a name="processor_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLayoutParser.parameter.processorName"></a>

- *Type:* str

The full resource name of a Document AI processor or processor version of type 'LAYOUT_PARSER_PROCESSOR'. Format: 'projects/{project_id}/locations/{location}/processors/{processor_id}' or 'projects/{project_id}/locations/{location}/processors/{processor_id}/processorVersions/{processor_version_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#processor_name GoogleVertexAiRagFile#processor_name}

---

##### `put_llm_parser` <a name="put_llm_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser"></a>

```python
def put_llm_parser(
  custom_parsing_prompt: str = None,
  max_parsing_requests_per_min: typing.Union[int, float] = None,
  model_name: str = None
) -> None
```

###### `custom_parsing_prompt`<sup>Optional</sup> <a name="custom_parsing_prompt" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.customParsingPrompt"></a>

- *Type:* str

The prompt to use for parsing. If not specified, a default prompt is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#custom_parsing_prompt GoogleVertexAiRagFile#custom_parsing_prompt}

---

###### `max_parsing_requests_per_min`<sup>Optional</sup> <a name="max_parsing_requests_per_min" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.maxParsingRequestsPerMin"></a>

- *Type:* typing.Union[int, float]

The maximum number of requests the job is allowed to make to the LLM model per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#max_parsing_requests_per_min GoogleVertexAiRagFile#max_parsing_requests_per_min}

---

###### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.putLlmParser.parameter.modelName"></a>

- *Type:* str

The name of a LLM model used for parsing. Format: 'projects/{project_id}/locations/{location}/publishers/{publisher}/models/{model}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#model_name GoogleVertexAiRagFile#model_name}

---

##### `reset_layout_parser` <a name="reset_layout_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLayoutParser"></a>

```python
def reset_layout_parser() -> None
```

##### `reset_llm_parser` <a name="reset_llm_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.resetLlmParser"></a>

```python
def reset_llm_parser() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser">layout_parser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser">llm_parser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput">layout_parser_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput">llm_parser_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layout_parser`<sup>Required</sup> <a name="layout_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParser"></a>

```python
layout_parser: GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLayoutParserOutputReference</a>

---

##### `llm_parser`<sup>Required</sup> <a name="llm_parser" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParser"></a>

```python
llm_parser: GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference">GoogleVertexAiRagFileRagFileParsingConfigLlmParserOutputReference</a>

---

##### `layout_parser_input`<sup>Optional</sup> <a name="layout_parser_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.layoutParserInput"></a>

```python
layout_parser_input: GoogleVertexAiRagFileRagFileParsingConfigLayoutParser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLayoutParser">GoogleVertexAiRagFileRagFileParsingConfigLayoutParser</a>

---

##### `llm_parser_input`<sup>Optional</sup> <a name="llm_parser_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.llmParserInput"></a>

```python
llm_parser_input: GoogleVertexAiRagFileRagFileParsingConfigLlmParser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigLlmParser">GoogleVertexAiRagFileRagFileParsingConfigLlmParser</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileRagFileParsingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileParsingConfig">GoogleVertexAiRagFileRagFileParsingConfig</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig">put_rag_file_chunking_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig">reset_rag_file_chunking_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rag_file_chunking_config` <a name="put_rag_file_chunking_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig"></a>

```python
def put_rag_file_chunking_config(
  fixed_length_chunking: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking = None
) -> None
```

###### `fixed_length_chunking`<sup>Optional</sup> <a name="fixed_length_chunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.putRagFileChunkingConfig.parameter.fixedLengthChunking"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

fixed_length_chunking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#fixed_length_chunking GoogleVertexAiRagFile#fixed_length_chunking}

---

##### `reset_rag_file_chunking_config` <a name="reset_rag_file_chunking_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.resetRagFileChunkingConfig"></a>

```python
def reset_rag_file_chunking_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig">rag_file_chunking_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput">rag_file_chunking_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rag_file_chunking_config`<sup>Required</sup> <a name="rag_file_chunking_config" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfig"></a>

```python
rag_file_chunking_config: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference</a>

---

##### `rag_file_chunking_config_input`<sup>Optional</sup> <a name="rag_file_chunking_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.ragFileChunkingConfigInput"></a>

```python
rag_file_chunking_config_input: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileRagFileTransformationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfig">GoogleVertexAiRagFileRagFileTransformationConfig</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap">reset_chunk_overlap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize">reset_chunk_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_chunk_overlap` <a name="reset_chunk_overlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkOverlap"></a>

```python
def reset_chunk_overlap() -> None
```

##### `reset_chunk_size` <a name="reset_chunk_size" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.resetChunkSize"></a>

```python
def reset_chunk_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput">chunk_overlap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput">chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap">chunk_overlap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize">chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chunk_overlap_input`<sup>Optional</sup> <a name="chunk_overlap_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlapInput"></a>

```python
chunk_overlap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size_input`<sup>Optional</sup> <a name="chunk_size_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSizeInput"></a>

```python
chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_overlap`<sup>Required</sup> <a name="chunk_overlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkOverlap"></a>

```python
chunk_overlap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `chunk_size`<sup>Required</sup> <a name="chunk_size" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.chunkSize"></a>

```python
chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---


### GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference <a name="GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking">put_fixed_length_chunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking">reset_fixed_length_chunking</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fixed_length_chunking` <a name="put_fixed_length_chunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking"></a>

```python
def put_fixed_length_chunking(
  chunk_overlap: typing.Union[int, float] = None,
  chunk_size: typing.Union[int, float] = None
) -> None
```

###### `chunk_overlap`<sup>Optional</sup> <a name="chunk_overlap" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.chunkOverlap"></a>

- *Type:* typing.Union[int, float]

The overlap between chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_overlap GoogleVertexAiRagFile#chunk_overlap}

---

###### `chunk_size`<sup>Optional</sup> <a name="chunk_size" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.putFixedLengthChunking.parameter.chunkSize"></a>

- *Type:* typing.Union[int, float]

The size of the chunks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_rag_file#chunk_size GoogleVertexAiRagFile#chunk_size}

---

##### `reset_fixed_length_chunking` <a name="reset_fixed_length_chunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.resetFixedLengthChunking"></a>

```python
def reset_fixed_length_chunking() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking">fixed_length_chunking</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput">fixed_length_chunking_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_length_chunking`<sup>Required</sup> <a name="fixed_length_chunking" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunking"></a>

```python
fixed_length_chunking: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunkingOutputReference</a>

---

##### `fixed_length_chunking_input`<sup>Optional</sup> <a name="fixed_length_chunking_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.fixedLengthChunkingInput"></a>

```python
fixed_length_chunking_input: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigFixedLengthChunking</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig">GoogleVertexAiRagFileRagFileTransformationConfigRagFileChunkingConfig</a>

---


### GoogleVertexAiRagFileTimeoutsOutputReference <a name="GoogleVertexAiRagFileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_file

googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiRagFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiRagFile.GoogleVertexAiRagFileTimeouts">GoogleVertexAiRagFileTimeouts</a>

---



