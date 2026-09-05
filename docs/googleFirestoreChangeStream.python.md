# `googleFirestoreChangeStream` Submodule <a name="`googleFirestoreChangeStream` Submodule" id="@cdktn/provider-google-beta.googleFirestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreChangeStream <a name="GoogleFirestoreChangeStream" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  retention_period: str,
  collection_group_scope: GoogleFirestoreChangeStreamCollectionGroupScope = None,
  database: str = None,
  database_scope: GoogleFirestoreChangeStreamDatabaseScope = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirestoreChangeStreamTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>str</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.collectionGroupScope">collection_group_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.database">database</a></code> | <code>str</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.databaseScope">database_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.name"></a>

- *Type:* str

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#name GoogleFirestoreChangeStream#name}

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.retentionPeriod"></a>

- *Type:* str

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#retention_period GoogleFirestoreChangeStream#retention_period}

---

##### `collection_group_scope`<sup>Optional</sup> <a name="collection_group_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.collectionGroupScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#collection_group_scope GoogleFirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.database"></a>

- *Type:* str

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#database GoogleFirestoreChangeStream#database}

---

##### `database_scope`<sup>Optional</sup> <a name="database_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.databaseScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#database_scope GoogleFirestoreChangeStream#database_scope}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#deletion_policy GoogleFirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#timeouts GoogleFirestoreChangeStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope">put_collection_group_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope">put_database_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope">reset_collection_group_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope">reset_database_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_collection_group_scope` <a name="put_collection_group_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope"></a>

```python
def put_collection_group_scope(
  collection_group_id: str
) -> None
```

###### `collection_group_id`<sup>Required</sup> <a name="collection_group_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope.parameter.collectionGroupId"></a>

- *Type:* str

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#collection_group_id GoogleFirestoreChangeStream#collection_group_id}

---

##### `put_database_scope` <a name="put_database_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope"></a>

```python
def put_database_scope() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}.

---

##### `reset_collection_group_scope` <a name="reset_collection_group_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope"></a>

```python
def reset_collection_group_scope() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_database_scope` <a name="reset_database_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope"></a>

```python
def reset_database_scope() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirestoreChangeStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope">collection_group_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope">database_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput">collection_group_scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput">database_scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput">retention_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod">retention_period</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_group_scope`<sup>Required</sup> <a name="collection_group_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope"></a>

```python
collection_group_scope: GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `database_scope`<sup>Required</sup> <a name="database_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope"></a>

```python
database_scope: GoogleFirestoreChangeStreamDatabaseScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts"></a>

```python
timeouts: GoogleFirestoreChangeStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `collection_group_scope_input`<sup>Optional</sup> <a name="collection_group_scope_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput"></a>

```python
collection_group_scope_input: GoogleFirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `database_scope_input`<sup>Optional</sup> <a name="database_scope_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput"></a>

```python
database_scope_input: GoogleFirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput"></a>

```python
retention_period_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirestoreChangeStreamTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreChangeStreamCollectionGroupScope <a name="GoogleFirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope(
  collection_group_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">collection_group_id</a></code> | <code>str</code> | The ID of the collection group to track. |

---

##### `collection_group_id`<sup>Required</sup> <a name="collection_group_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```python
collection_group_id: str
```

- *Type:* str

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#collection_group_id GoogleFirestoreChangeStream#collection_group_id}

---

### GoogleFirestoreChangeStreamConfig <a name="GoogleFirestoreChangeStreamConfig" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  retention_period: str,
  collection_group_scope: GoogleFirestoreChangeStreamCollectionGroupScope = None,
  database: str = None,
  database_scope: GoogleFirestoreChangeStreamDatabaseScope = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirestoreChangeStreamTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name">name</a></code> | <code>str</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod">retention_period</a></code> | <code>str</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope">collection_group_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database">database</a></code> | <code>str</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope">database_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#name GoogleFirestoreChangeStream#name}

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod"></a>

```python
retention_period: str
```

- *Type:* str

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#retention_period GoogleFirestoreChangeStream#retention_period}

---

##### `collection_group_scope`<sup>Optional</sup> <a name="collection_group_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```python
collection_group_scope: GoogleFirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#collection_group_scope GoogleFirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#database GoogleFirestoreChangeStream#database}

---

##### `database_scope`<sup>Optional</sup> <a name="database_scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope"></a>

```python
database_scope: GoogleFirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#database_scope GoogleFirestoreChangeStream#database_scope}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#deletion_policy GoogleFirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts"></a>

```python
timeouts: GoogleFirestoreChangeStreamTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#timeouts GoogleFirestoreChangeStream#timeouts}

---

### GoogleFirestoreChangeStreamDatabaseScope <a name="GoogleFirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope()
```


### GoogleFirestoreChangeStreamTimeouts <a name="GoogleFirestoreChangeStreamTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference <a name="GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">collection_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">collection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_group_id_input`<sup>Optional</sup> <a name="collection_group_id_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```python
collection_group_id_input: str
```

- *Type:* str

---

##### `collection_group_id`<sup>Required</sup> <a name="collection_group_id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```python
collection_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---


### GoogleFirestoreChangeStreamDatabaseScopeOutputReference <a name="GoogleFirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---


### GoogleFirestoreChangeStreamTimeoutsOutputReference <a name="GoogleFirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_change_stream

googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirestoreChangeStreamTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---



