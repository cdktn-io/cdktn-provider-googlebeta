# `googleVectorSearchCollection` Submodule <a name="`googleVectorSearchCollection` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchCollection <a name="GoogleVectorSearchCollection" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection google_vector_search_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollection(
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
  location: str,
  data_schema: str = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  encryption_spec: GoogleVectorSearchCollectionEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleVectorSearchCollectionTimeouts = None,
  vector_schema: IResolvable | typing.List[GoogleVectorSearchCollectionVectorSchema] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.dataSchema">data_schema</a></code> | <code>str</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.description">description</a></code> | <code>str</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#id GoogleVectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#project GoogleVectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.vectorSchema">vector_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]</code> | vector_schema block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.collectionId"></a>

- *Type:* str

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#collection_id GoogleVectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#location GoogleVectorSearchCollection#location}

---

##### `data_schema`<sup>Optional</sup> <a name="data_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.dataSchema"></a>

- *Type:* str

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#data_schema GoogleVectorSearchCollection#data_schema}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#deletion_policy GoogleVectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.description"></a>

- *Type:* str

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#description GoogleVectorSearchCollection#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.displayName"></a>

- *Type:* str

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#display_name GoogleVectorSearchCollection#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#encryption_spec GoogleVectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#id GoogleVectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#labels GoogleVectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#project GoogleVectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#timeouts GoogleVectorSearchCollection#timeouts}

---

##### `vector_schema`<sup>Optional</sup> <a name="vector_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.Initializer.parameter.vectorSchema"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#vector_schema GoogleVectorSearchCollection#vector_schema}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putVectorSchema">put_vector_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDataSchema">reset_data_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetVectorSchema">reset_vector_schema</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  crypto_key_name: str
) -> None
```

###### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putEncryptionSpec.parameter.cryptoKeyName"></a>

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#crypto_key_name GoogleVectorSearchCollection#crypto_key_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#create GoogleVectorSearchCollection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#delete GoogleVectorSearchCollection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#update GoogleVectorSearchCollection#update}.

---

##### `put_vector_schema` <a name="put_vector_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putVectorSchema"></a>

```python
def put_vector_schema(
  value: IResolvable | typing.List[GoogleVectorSearchCollectionVectorSchema]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.putVectorSchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]

---

##### `reset_data_schema` <a name="reset_data_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDataSchema"></a>

```python
def reset_data_schema() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vector_schema` <a name="reset_vector_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.resetVectorSchema"></a>

```python
def reset_vector_schema() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVectorSearchCollection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVectorSearchCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVectorSearchCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVectorSearchCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference">GoogleVectorSearchCollectionEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference">GoogleVectorSearchCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.vectorSchema">vector_schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList">GoogleVectorSearchCollectionVectorSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.dataSchemaInput">data_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.vectorSchemaInput">vector_schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.dataSchema">data_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVectorSearchCollectionEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference">GoogleVectorSearchCollectionEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.timeouts"></a>

```python
timeouts: GoogleVectorSearchCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference">GoogleVectorSearchCollectionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vector_schema`<sup>Required</sup> <a name="vector_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.vectorSchema"></a>

```python
vector_schema: GoogleVectorSearchCollectionVectorSchemaList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList">GoogleVectorSearchCollectionVectorSchemaList</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `data_schema_input`<sup>Optional</sup> <a name="data_schema_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.dataSchemaInput"></a>

```python
data_schema_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVectorSearchCollectionEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVectorSearchCollectionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a>

---

##### `vector_schema_input`<sup>Optional</sup> <a name="vector_schema_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.vectorSchemaInput"></a>

```python
vector_schema_input: IResolvable | typing.List[GoogleVectorSearchCollectionVectorSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data_schema`<sup>Required</sup> <a name="data_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.dataSchema"></a>

```python
data_schema: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchCollectionConfig <a name="GoogleVectorSearchCollectionConfig" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  location: str,
  data_schema: str = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  encryption_spec: GoogleVectorSearchCollectionEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleVectorSearchCollectionTimeouts = None,
  vector_schema: IResolvable | typing.List[GoogleVectorSearchCollectionVectorSchema] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.collectionId">collection_id</a></code> | <code>str</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.dataSchema">data_schema</a></code> | <code>str</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.description">description</a></code> | <code>str</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.displayName">display_name</a></code> | <code>str</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#id GoogleVectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#project GoogleVectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.vectorSchema">vector_schema</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]</code> | vector_schema block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#collection_id GoogleVectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#location GoogleVectorSearchCollection#location}

---

##### `data_schema`<sup>Optional</sup> <a name="data_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.dataSchema"></a>

```python
data_schema: str
```

- *Type:* str

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#data_schema GoogleVectorSearchCollection#data_schema}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#deletion_policy GoogleVectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#description GoogleVectorSearchCollection#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#display_name GoogleVectorSearchCollection#display_name}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVectorSearchCollectionEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#encryption_spec GoogleVectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#id GoogleVectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#labels GoogleVectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#project GoogleVectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.timeouts"></a>

```python
timeouts: GoogleVectorSearchCollectionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#timeouts GoogleVectorSearchCollection#timeouts}

---

##### `vector_schema`<sup>Optional</sup> <a name="vector_schema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionConfig.property.vectorSchema"></a>

```python
vector_schema: IResolvable | typing.List[GoogleVectorSearchCollectionVectorSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#vector_schema GoogleVectorSearchCollection#vector_schema}

---

### GoogleVectorSearchCollectionEncryptionSpec <a name="GoogleVectorSearchCollectionEncryptionSpec" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec(
  crypto_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#crypto_key_name GoogleVectorSearchCollection#crypto_key_name}

---

### GoogleVectorSearchCollectionTimeouts <a name="GoogleVectorSearchCollectionTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#create GoogleVectorSearchCollection#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#delete GoogleVectorSearchCollection#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#update GoogleVectorSearchCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#create GoogleVectorSearchCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#delete GoogleVectorSearchCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#update GoogleVectorSearchCollection#update}.

---

### GoogleVectorSearchCollectionVectorSchema <a name="GoogleVectorSearchCollectionVectorSchema" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema(
  field_name: str,
  dense_vector: GoogleVectorSearchCollectionVectorSchemaDenseVector = None,
  sparse_vector: GoogleVectorSearchCollectionVectorSchemaSparseVector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#field_name GoogleVectorSearchCollection#field_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.property.denseVector">dense_vector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector">GoogleVectorSearchCollectionVectorSchemaDenseVector</a></code> | dense_vector block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.property.sparseVector">sparse_vector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector">GoogleVectorSearchCollectionVectorSchemaSparseVector</a></code> | sparse_vector block. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#field_name GoogleVectorSearchCollection#field_name}.

---

##### `dense_vector`<sup>Optional</sup> <a name="dense_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.property.denseVector"></a>

```python
dense_vector: GoogleVectorSearchCollectionVectorSchemaDenseVector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector">GoogleVectorSearchCollectionVectorSchemaDenseVector</a>

dense_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#dense_vector GoogleVectorSearchCollection#dense_vector}

---

##### `sparse_vector`<sup>Optional</sup> <a name="sparse_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema.property.sparseVector"></a>

```python
sparse_vector: GoogleVectorSearchCollectionVectorSchemaSparseVector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector">GoogleVectorSearchCollectionVectorSchemaSparseVector</a>

sparse_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#sparse_vector GoogleVectorSearchCollection#sparse_vector}

---

### GoogleVectorSearchCollectionVectorSchemaDenseVector <a name="GoogleVectorSearchCollectionVectorSchemaDenseVector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector(
  dimensions: typing.Union[int, float] = None,
  vertex_embedding_config: GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector.property.dimensions">dimensions</a></code> | <code>typing.Union[int, float]</code> | Dimensionality of the vector field. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig">vertex_embedding_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | vertex_embedding_config block. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector.property.dimensions"></a>

```python
dimensions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#dimensions GoogleVectorSearchCollection#dimensions}

---

##### `vertex_embedding_config`<sup>Optional</sup> <a name="vertex_embedding_config" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig"></a>

```python
vertex_embedding_config: GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#vertex_embedding_config GoogleVectorSearchCollection#vertex_embedding_config}

---

### GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig <a name="GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig(
  model_id: str,
  task_type: str,
  text_template: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId">model_id</a></code> | <code>str</code> | Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType">task_type</a></code> | <code>str</code> | Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate">text_template</a></code> | <code>str</code> | Required: Text template for the input to the model. |

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#model_id GoogleVectorSearchCollection#model_id}

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#task_type GoogleVectorSearchCollection#task_type}

---

##### `text_template`<sup>Required</sup> <a name="text_template" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate"></a>

```python
text_template: str
```

- *Type:* str

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#text_template GoogleVectorSearchCollection#text_template}

---

### GoogleVectorSearchCollectionVectorSchemaSparseVector <a name="GoogleVectorSearchCollectionVectorSchemaSparseVector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchCollectionEncryptionSpecOutputReference <a name="GoogleVectorSearchCollectionEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchCollectionEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionEncryptionSpec">GoogleVectorSearchCollectionEncryptionSpec</a>

---


### GoogleVectorSearchCollectionTimeoutsOutputReference <a name="GoogleVectorSearchCollectionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVectorSearchCollectionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionTimeouts">GoogleVectorSearchCollectionTimeouts</a>

---


### GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference <a name="GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig">put_vertex_embedding_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig">reset_vertex_embedding_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vertex_embedding_config` <a name="put_vertex_embedding_config" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig"></a>

```python
def put_vertex_embedding_config(
  model_id: str,
  task_type: str,
  text_template: str
) -> None
```

###### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.modelId"></a>

- *Type:* str

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#model_id GoogleVectorSearchCollection#model_id}

---

###### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.taskType"></a>

- *Type:* str

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#task_type GoogleVectorSearchCollection#task_type}

---

###### `text_template`<sup>Required</sup> <a name="text_template" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.textTemplate"></a>

- *Type:* str

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#text_template GoogleVectorSearchCollection#text_template}

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_vertex_embedding_config` <a name="reset_vertex_embedding_config" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig"></a>

```python
def reset_vertex_embedding_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig">vertex_embedding_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput">vertex_embedding_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector">GoogleVectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vertex_embedding_config`<sup>Required</sup> <a name="vertex_embedding_config" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig"></a>

```python
vertex_embedding_config: GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vertex_embedding_config_input`<sup>Optional</sup> <a name="vertex_embedding_config_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput"></a>

```python
vertex_embedding_config_input: GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions"></a>

```python
dimensions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchCollectionVectorSchemaDenseVector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector">GoogleVectorSearchCollectionVectorSchemaDenseVector</a>

---


### GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference <a name="GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput">text_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate">text_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `text_template_input`<sup>Optional</sup> <a name="text_template_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput"></a>

```python
text_template_input: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `text_template`<sup>Required</sup> <a name="text_template" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate"></a>

```python
text_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---


### GoogleVectorSearchCollectionVectorSchemaList <a name="GoogleVectorSearchCollectionVectorSchemaList" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVectorSearchCollectionVectorSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVectorSearchCollectionVectorSchema]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>]

---


### GoogleVectorSearchCollectionVectorSchemaOutputReference <a name="GoogleVectorSearchCollectionVectorSchemaOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.putDenseVector">put_dense_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.putSparseVector">put_sparse_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resetDenseVector">reset_dense_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resetSparseVector">reset_sparse_vector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dense_vector` <a name="put_dense_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.putDenseVector"></a>

```python
def put_dense_vector(
  dimensions: typing.Union[int, float] = None,
  vertex_embedding_config: GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.dimensions"></a>

- *Type:* typing.Union[int, float]

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#dimensions GoogleVectorSearchCollection#dimensions}

---

###### `vertex_embedding_config`<sup>Optional</sup> <a name="vertex_embedding_config" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.vertexEmbeddingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">GoogleVectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_vector_search_collection#vertex_embedding_config GoogleVectorSearchCollection#vertex_embedding_config}

---

##### `put_sparse_vector` <a name="put_sparse_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.putSparseVector"></a>

```python
def put_sparse_vector() -> None
```

##### `reset_dense_vector` <a name="reset_dense_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resetDenseVector"></a>

```python
def reset_dense_vector() -> None
```

##### `reset_sparse_vector` <a name="reset_sparse_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.resetSparseVector"></a>

```python
def reset_sparse_vector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.denseVector">dense_vector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference">GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.sparseVector">sparse_vector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference">GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput">dense_vector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector">GoogleVectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput">sparse_vector_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector">GoogleVectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dense_vector`<sup>Required</sup> <a name="dense_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.denseVector"></a>

```python
dense_vector: GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference">GoogleVectorSearchCollectionVectorSchemaDenseVectorOutputReference</a>

---

##### `sparse_vector`<sup>Required</sup> <a name="sparse_vector" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.sparseVector"></a>

```python
sparse_vector: GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference">GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference</a>

---

##### `dense_vector_input`<sup>Optional</sup> <a name="dense_vector_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput"></a>

```python
dense_vector_input: GoogleVectorSearchCollectionVectorSchemaDenseVector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaDenseVector">GoogleVectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `sparse_vector_input`<sup>Optional</sup> <a name="sparse_vector_input" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput"></a>

```python
sparse_vector_input: GoogleVectorSearchCollectionVectorSchemaSparseVector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector">GoogleVectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVectorSearchCollectionVectorSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchema">GoogleVectorSearchCollectionVectorSchema</a>

---


### GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference <a name="GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_collection

googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector">GoogleVectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchCollectionVectorSchemaSparseVector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchCollection.GoogleVectorSearchCollectionVectorSchemaSparseVector">GoogleVectorSearchCollectionVectorSchemaSparseVector</a>

---



