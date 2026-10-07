# `googleVertexAiRagCorpus` Submodule <a name="`googleVertexAiRagCorpus` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagCorpus <a name="GoogleVertexAiRagCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: GoogleVertexAiRagCorpusEncryptionSpec = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVertexAiRagCorpusTimeouts = None,
  vector_db_config: GoogleVertexAiRagCorpusVectorDbConfig = None,
  vertex_ai_search_config: GoogleVertexAiRagCorpusVertexAiSearchConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.vectorDbConfig">vector_db_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.vertexAiSearchConfig">vertex_ai_search_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.displayName"></a>

- *Type:* str

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#display_name GoogleVertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.region"></a>

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#region GoogleVertexAiRagCorpus#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#deletion_policy GoogleVertexAiRagCorpus#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.description"></a>

- *Type:* str

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#description GoogleVertexAiRagCorpus#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#encryption_spec GoogleVertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#timeouts GoogleVertexAiRagCorpus#timeouts}

---

##### `vector_db_config`<sup>Optional</sup> <a name="vector_db_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.vectorDbConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vector_db_config GoogleVertexAiRagCorpus#vector_db_config}

---

##### `vertex_ai_search_config`<sup>Optional</sup> <a name="vertex_ai_search_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.vertexAiSearchConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_ai_search_config GoogleVertexAiRagCorpus#vertex_ai_search_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig">put_vector_db_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig">put_vertex_ai_search_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig">reset_vector_db_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig">reset_vertex_ai_search_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#kms_key_name GoogleVertexAiRagCorpus#kms_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}.

---

##### `put_vector_db_config` <a name="put_vector_db_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig"></a>

```python
def put_vector_db_config(
  api_auth: GoogleVertexAiRagCorpusVectorDbConfigApiAuth = None,
  pinecone: GoogleVertexAiRagCorpusVectorDbConfigPinecone = None,
  rag_embedding_model_config: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig = None,
  rag_managed_db: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb = None,
  vertex_vector_search: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch = None
) -> None
```

###### `api_auth`<sup>Optional</sup> <a name="api_auth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.apiAuth"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_auth GoogleVertexAiRagCorpus#api_auth}

---

###### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.pinecone"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#pinecone GoogleVertexAiRagCorpus#pinecone}

---

###### `rag_embedding_model_config`<sup>Optional</sup> <a name="rag_embedding_model_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.ragEmbeddingModelConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_embedding_model_config GoogleVertexAiRagCorpus#rag_embedding_model_config}

---

###### `rag_managed_db`<sup>Optional</sup> <a name="rag_managed_db" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.ragManagedDb"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_managed_db GoogleVertexAiRagCorpus#rag_managed_db}

---

###### `vertex_vector_search`<sup>Optional</sup> <a name="vertex_vector_search" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.vertexVectorSearch"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_vector_search GoogleVertexAiRagCorpus#vertex_vector_search}

---

##### `put_vertex_ai_search_config` <a name="put_vertex_ai_search_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig"></a>

```python
def put_vertex_ai_search_config(
  serving_config: str
) -> None
```

###### `serving_config`<sup>Required</sup> <a name="serving_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig.parameter.servingConfig"></a>

- *Type:* str

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#serving_config GoogleVertexAiRagCorpus#serving_config}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vector_db_config` <a name="reset_vector_db_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig"></a>

```python
def reset_vector_db_config() -> None
```

##### `reset_vertex_ai_search_config` <a name="reset_vertex_ai_search_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```python
def reset_vertex_ai_search_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiRagCorpus to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus">corpus_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig">vector_db_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig">vertex_ai_search_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput">vector_db_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput">vertex_ai_search_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `corpus_status`<sup>Required</sup> <a name="corpus_status" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus"></a>

```python
corpus_status: GoogleVertexAiRagCorpusCorpusStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiRagCorpusEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts"></a>

```python
timeouts: GoogleVertexAiRagCorpusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vector_db_config`<sup>Required</sup> <a name="vector_db_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig"></a>

```python
vector_db_config: GoogleVertexAiRagCorpusVectorDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `vertex_ai_search_config`<sup>Required</sup> <a name="vertex_ai_search_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```python
vertex_ai_search_config: GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiRagCorpusTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---

##### `vector_db_config_input`<sup>Optional</sup> <a name="vector_db_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput"></a>

```python
vector_db_config_input: GoogleVertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `vertex_ai_search_config_input`<sup>Optional</sup> <a name="vertex_ai_search_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```python
vertex_ai_search_config_input: GoogleVertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagCorpusConfig <a name="GoogleVertexAiRagCorpusConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  encryption_spec: GoogleVertexAiRagCorpusEncryptionSpec = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVertexAiRagCorpusTimeouts = None,
  vector_db_config: GoogleVertexAiRagCorpusVectorDbConfig = None,
  vertex_ai_search_config: GoogleVertexAiRagCorpusVertexAiSearchConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region">region</a></code> | <code>str</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description">description</a></code> | <code>str</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig">vector_db_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig">vertex_ai_search_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#display_name GoogleVertexAiRagCorpus#display_name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#region GoogleVertexAiRagCorpus#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#deletion_policy GoogleVertexAiRagCorpus#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#description GoogleVertexAiRagCorpus#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#encryption_spec GoogleVertexAiRagCorpus#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiRagCorpusTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#timeouts GoogleVertexAiRagCorpus#timeouts}

---

##### `vector_db_config`<sup>Optional</sup> <a name="vector_db_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```python
vector_db_config: GoogleVertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vector_db_config GoogleVertexAiRagCorpus#vector_db_config}

---

##### `vertex_ai_search_config`<sup>Optional</sup> <a name="vertex_ai_search_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```python
vertex_ai_search_config: GoogleVertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_ai_search_config GoogleVertexAiRagCorpus#vertex_ai_search_config}

---

### GoogleVertexAiRagCorpusCorpusStatus <a name="GoogleVertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus()
```


### GoogleVertexAiRagCorpusEncryptionSpec <a name="GoogleVertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Required. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#kms_key_name GoogleVertexAiRagCorpus#kms_key_name}

---

### GoogleVertexAiRagCorpusTimeouts <a name="GoogleVertexAiRagCorpusTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}.

---

### GoogleVertexAiRagCorpusVectorDbConfig <a name="GoogleVertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig(
  api_auth: GoogleVertexAiRagCorpusVectorDbConfigApiAuth = None,
  pinecone: GoogleVertexAiRagCorpusVectorDbConfigPinecone = None,
  rag_embedding_model_config: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig = None,
  rag_managed_db: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb = None,
  vertex_vector_search: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth">api_auth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">rag_embedding_model_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb">rag_managed_db</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">vertex_vector_search</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `api_auth`<sup>Optional</sup> <a name="api_auth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```python
api_auth: GoogleVertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_auth GoogleVertexAiRagCorpus#api_auth}

---

##### `pinecone`<sup>Optional</sup> <a name="pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```python
pinecone: GoogleVertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#pinecone GoogleVertexAiRagCorpus#pinecone}

---

##### `rag_embedding_model_config`<sup>Optional</sup> <a name="rag_embedding_model_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```python
rag_embedding_model_config: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_embedding_model_config GoogleVertexAiRagCorpus#rag_embedding_model_config}

---

##### `rag_managed_db`<sup>Optional</sup> <a name="rag_managed_db" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```python
rag_managed_db: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_managed_db GoogleVertexAiRagCorpus#rag_managed_db}

---

##### `vertex_vector_search`<sup>Optional</sup> <a name="vertex_vector_search" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```python
vertex_vector_search: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_vector_search GoogleVertexAiRagCorpus#vertex_vector_search}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuth <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth(
  api_key_config: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```python
api_key_config: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_config GoogleVertexAiRagCorpus#api_key_config}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig(
  api_key_secret_version: str = None,
  api_key_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">api_key_string</a></code> | <code>str</code> | The API key string. |

---

##### `api_key_secret_version`<sup>Optional</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_secret_version GoogleVertexAiRagCorpus#api_key_secret_version}

---

##### `api_key_string`<sup>Optional</sup> <a name="api_key_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```python
api_key_string: str
```

- *Type:* str

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_string GoogleVertexAiRagCorpus#api_key_string}

---

### GoogleVertexAiRagCorpusVectorDbConfigPinecone <a name="GoogleVertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone(
  index_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName">index_name</a></code> | <code>str</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_name GoogleVertexAiRagCorpus#index_name}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig(
  vertex_prediction_endpoint: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">vertex_prediction_endpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `vertex_prediction_endpoint`<sup>Optional</sup> <a name="vertex_prediction_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```python
vertex_prediction_endpoint: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_prediction_endpoint GoogleVertexAiRagCorpus#vertex_prediction_endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint(
  endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">endpoint</a></code> | <code>str</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#endpoint GoogleVertexAiRagCorpus#endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb(
  ann: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn = None,
  knn: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```python
ann: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#ann GoogleVertexAiRagCorpus#ann}

---

##### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```python
knn: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#knn GoogleVertexAiRagCorpus#knn}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn(
  leaf_count: typing.Union[int, float] = None,
  tree_depth: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">leaf_count</a></code> | <code>typing.Union[int, float]</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">tree_depth</a></code> | <code>typing.Union[int, float]</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `leaf_count`<sup>Optional</sup> <a name="leaf_count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```python
leaf_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#leaf_count GoogleVertexAiRagCorpus#leaf_count}

---

##### `tree_depth`<sup>Optional</sup> <a name="tree_depth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```python
tree_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#tree_depth GoogleVertexAiRagCorpus#tree_depth}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn()
```


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch(
  index: str,
  index_endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">index</a></code> | <code>str</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">index_endpoint</a></code> | <code>str</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```python
index: str
```

- *Type:* str

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index GoogleVertexAiRagCorpus#index}

---

##### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```python
index_endpoint: str
```

- *Type:* str

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_endpoint GoogleVertexAiRagCorpus#index_endpoint}

---

### GoogleVertexAiRagCorpusVertexAiSearchConfig <a name="GoogleVertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig(
  serving_config: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">serving_config</a></code> | <code>str</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `serving_config`<sup>Required</sup> <a name="serving_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```python
serving_config: str
```

- *Type:* str

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#serving_config GoogleVertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagCorpusCorpusStatusList <a name="GoogleVertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiRagCorpusCorpusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiRagCorpusCorpusStatusOutputReference <a name="GoogleVertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">error_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```python
error_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusCorpusStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a>

---


### GoogleVertexAiRagCorpusEncryptionSpecOutputReference <a name="GoogleVertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---


### GoogleVertexAiRagCorpusTimeoutsOutputReference <a name="GoogleVertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiRagCorpusTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">reset_api_key_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">reset_api_key_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key_secret_version` <a name="reset_api_key_secret_version" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```python
def reset_api_key_secret_version() -> None
```

##### `reset_api_key_string` <a name="reset_api_key_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```python
def reset_api_key_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">api_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">api_key_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">api_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">api_key_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_secret_version_input`<sup>Optional</sup> <a name="api_key_secret_version_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```python
api_key_secret_version_input: str
```

- *Type:* str

---

##### `api_key_string_input`<sup>Optional</sup> <a name="api_key_string_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```python
api_key_string_input: str
```

- *Type:* str

---

##### `api_key_secret_version`<sup>Required</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```python
api_key_secret_version: str
```

- *Type:* str

---

##### `api_key_string`<sup>Required</sup> <a name="api_key_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```python
api_key_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  api_key_secret_version: str = None,
  api_key_string: str = None
) -> None
```

###### `api_key_secret_version`<sup>Optional</sup> <a name="api_key_secret_version" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.apiKeySecretVersion"></a>

- *Type:* str

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_secret_version GoogleVertexAiRagCorpus#api_key_secret_version}

---

###### `api_key_string`<sup>Optional</sup> <a name="api_key_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.apiKeyString"></a>

- *Type:* str

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_string GoogleVertexAiRagCorpus#api_key_string}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">put_api_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">put_pinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">put_rag_embedding_model_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">put_rag_managed_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">put_vertex_vector_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">reset_api_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">reset_pinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">reset_rag_embedding_model_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">reset_rag_managed_db</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">reset_vertex_vector_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_auth` <a name="put_api_auth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```python
def put_api_auth(
  api_key_config: GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_config GoogleVertexAiRagCorpus#api_key_config}

---

##### `put_pinecone` <a name="put_pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```python
def put_pinecone(
  index_name: str
) -> None
```

###### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.indexName"></a>

- *Type:* str

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_name GoogleVertexAiRagCorpus#index_name}

---

##### `put_rag_embedding_model_config` <a name="put_rag_embedding_model_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```python
def put_rag_embedding_model_config(
  vertex_prediction_endpoint: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint = None
) -> None
```

###### `vertex_prediction_endpoint`<sup>Optional</sup> <a name="vertex_prediction_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.vertexPredictionEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_prediction_endpoint GoogleVertexAiRagCorpus#vertex_prediction_endpoint}

---

##### `put_rag_managed_db` <a name="put_rag_managed_db" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```python
def put_rag_managed_db(
  ann: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn = None,
  knn: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn = None
) -> None
```

###### `ann`<sup>Optional</sup> <a name="ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.ann"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#ann GoogleVertexAiRagCorpus#ann}

---

###### `knn`<sup>Optional</sup> <a name="knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.knn"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#knn GoogleVertexAiRagCorpus#knn}

---

##### `put_vertex_vector_search` <a name="put_vertex_vector_search" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```python
def put_vertex_vector_search(
  index: str,
  index_endpoint: str
) -> None
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.index"></a>

- *Type:* str

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index GoogleVertexAiRagCorpus#index}

---

###### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.indexEndpoint"></a>

- *Type:* str

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_endpoint GoogleVertexAiRagCorpus#index_endpoint}

---

##### `reset_api_auth` <a name="reset_api_auth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```python
def reset_api_auth() -> None
```

##### `reset_pinecone` <a name="reset_pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```python
def reset_pinecone() -> None
```

##### `reset_rag_embedding_model_config` <a name="reset_rag_embedding_model_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```python
def reset_rag_embedding_model_config() -> None
```

##### `reset_rag_managed_db` <a name="reset_rag_managed_db" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```python
def reset_rag_managed_db() -> None
```

##### `reset_vertex_vector_search` <a name="reset_vertex_vector_search" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```python
def reset_vertex_vector_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">api_auth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">rag_embedding_model_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">rag_managed_db</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">vertex_vector_search</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">api_auth_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">pinecone_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">rag_embedding_model_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">rag_managed_db_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">vertex_vector_search_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_auth`<sup>Required</sup> <a name="api_auth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```python
api_auth: GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `pinecone`<sup>Required</sup> <a name="pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```python
pinecone: GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `rag_embedding_model_config`<sup>Required</sup> <a name="rag_embedding_model_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```python
rag_embedding_model_config: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `rag_managed_db`<sup>Required</sup> <a name="rag_managed_db" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```python
rag_managed_db: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `vertex_vector_search`<sup>Required</sup> <a name="vertex_vector_search" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```python
vertex_vector_search: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `api_auth_input`<sup>Optional</sup> <a name="api_auth_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```python
api_auth_input: GoogleVertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `pinecone_input`<sup>Optional</sup> <a name="pinecone_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```python
pinecone_input: GoogleVertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `rag_embedding_model_config_input`<sup>Optional</sup> <a name="rag_embedding_model_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```python
rag_embedding_model_config_input: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `rag_managed_db_input`<sup>Optional</sup> <a name="rag_managed_db_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```python
rag_managed_db_input: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `vertex_vector_search_input`<sup>Optional</sup> <a name="vertex_vector_search_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```python
vertex_vector_search_input: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">put_vertex_prediction_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">reset_vertex_prediction_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vertex_prediction_endpoint` <a name="put_vertex_prediction_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```python
def put_vertex_prediction_endpoint(
  endpoint: str
) -> None
```

###### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.endpoint"></a>

- *Type:* str

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#endpoint GoogleVertexAiRagCorpus#endpoint}

---

##### `reset_vertex_prediction_endpoint` <a name="reset_vertex_prediction_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```python
def reset_vertex_prediction_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">vertex_prediction_endpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">vertex_prediction_endpoint_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vertex_prediction_endpoint`<sup>Required</sup> <a name="vertex_prediction_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```python
vertex_prediction_endpoint: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `vertex_prediction_endpoint_input`<sup>Optional</sup> <a name="vertex_prediction_endpoint_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```python
vertex_prediction_endpoint_input: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">model_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `model_version_id`<sup>Required</sup> <a name="model_version_id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```python
model_version_id: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">reset_leaf_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">reset_tree_depth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_leaf_count` <a name="reset_leaf_count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```python
def reset_leaf_count() -> None
```

##### `reset_tree_depth` <a name="reset_tree_depth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```python
def reset_tree_depth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">leaf_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">tree_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">leaf_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">tree_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `leaf_count_input`<sup>Optional</sup> <a name="leaf_count_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```python
leaf_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tree_depth_input`<sup>Optional</sup> <a name="tree_depth_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```python
tree_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `leaf_count`<sup>Required</sup> <a name="leaf_count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```python
leaf_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tree_depth`<sup>Required</sup> <a name="tree_depth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```python
tree_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">put_ann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">put_knn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">reset_ann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">reset_knn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ann` <a name="put_ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```python
def put_ann(
  leaf_count: typing.Union[int, float] = None,
  tree_depth: typing.Union[int, float] = None
) -> None
```

###### `leaf_count`<sup>Optional</sup> <a name="leaf_count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.leafCount"></a>

- *Type:* typing.Union[int, float]

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#leaf_count GoogleVertexAiRagCorpus#leaf_count}

---

###### `tree_depth`<sup>Optional</sup> <a name="tree_depth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.treeDepth"></a>

- *Type:* typing.Union[int, float]

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#tree_depth GoogleVertexAiRagCorpus#tree_depth}

---

##### `put_knn` <a name="put_knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```python
def put_knn() -> None
```

##### `reset_ann` <a name="reset_ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```python
def reset_ann() -> None
```

##### `reset_knn` <a name="reset_knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```python
def reset_knn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">ann_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">knn_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ann`<sup>Required</sup> <a name="ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```python
ann: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `knn`<sup>Required</sup> <a name="knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```python
knn: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `ann_input`<sup>Optional</sup> <a name="ann_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```python
ann_input: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `knn_input`<sup>Optional</sup> <a name="knn_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```python
knn_input: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">index_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">index_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_endpoint_input`<sup>Optional</sup> <a name="index_endpoint_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```python
index_endpoint_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `index_endpoint`<sup>Required</sup> <a name="index_endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```python
index_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_rag_corpus

googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">serving_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">serving_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `serving_config_input`<sup>Optional</sup> <a name="serving_config_input" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```python
serving_config_input: str
```

- *Type:* str

---

##### `serving_config`<sup>Required</sup> <a name="serving_config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```python
serving_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---



