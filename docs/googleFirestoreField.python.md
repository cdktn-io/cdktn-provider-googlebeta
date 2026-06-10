# `googleFirestoreField` Submodule <a name="`googleFirestoreField` Submodule" id="@cdktn/provider-google-beta.googleFirestoreField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreField <a name="GoogleFirestoreField" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field google_firestore_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreField(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection: str,
  field: str,
  database: str = None,
  deletion_policy: str = None,
  id: str = None,
  index_config: GoogleFirestoreFieldIndexConfig = None,
  project: str = None,
  timeouts: GoogleFirestoreFieldTimeouts = None,
  ttl_config: GoogleFirestoreFieldTtlConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.collection">collection</a></code> | <code>str</code> | The id of the collection group to configure. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.field">field</a></code> | <code>str</code> | The id of the field to configure. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.indexConfig">index_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.ttlConfig">ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.collection"></a>

- *Type:* str

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#collection GoogleFirestoreField#collection}

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.field"></a>

- *Type:* str

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#field GoogleFirestoreField#field}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.database"></a>

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#database GoogleFirestoreField#database}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#deletion_policy GoogleFirestoreField#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_config`<sup>Optional</sup> <a name="index_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.indexConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#index_config GoogleFirestoreField#index_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#timeouts GoogleFirestoreField#timeouts}

---

##### `ttl_config`<sup>Optional</sup> <a name="ttl_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.Initializer.parameter.ttlConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#ttl_config GoogleFirestoreField#ttl_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig">put_index_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig">put_ttl_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetIndexConfig">reset_index_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTtlConfig">reset_ttl_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_index_config` <a name="put_index_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig"></a>

```python
def put_index_config(
  indexes: IResolvable | typing.List[GoogleFirestoreFieldIndexConfigIndexes] = None
) -> None
```

###### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putIndexConfig.parameter.indexes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]

indexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#indexes GoogleFirestoreField#indexes}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}.

---

##### `put_ttl_config` <a name="put_ttl_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig"></a>

```python
def put_ttl_config(
  expiration_offset: str = None
) -> None
```

###### `expiration_offset`<sup>Optional</sup> <a name="expiration_offset" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.putTtlConfig.parameter.expirationOffset"></a>

- *Type:* str

The offset, relative to the timestamp value from the field, used to determine the document's expiration time.

Formatted as the number of seconds followed by 's'. For example, "60s" represents an offset of one minute. The number of seconds must be between 1 and 2147483647 inclusive. To configure no offset, omit this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#expiration_offset GoogleFirestoreField#expiration_offset}

---

##### `reset_database` <a name="reset_database" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_config` <a name="reset_index_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetIndexConfig"></a>

```python
def reset_index_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl_config` <a name="reset_ttl_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.resetTtlConfig"></a>

```python
def reset_ttl_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirestoreField resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreField.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreField.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirestoreField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirestoreField to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirestoreField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfig">index_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference">GoogleFirestoreFieldIndexConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference">GoogleFirestoreFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfig">ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference">GoogleFirestoreFieldTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collectionInput">collection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfigInput">index_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfigInput">ttl_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collection">collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `index_config`<sup>Required</sup> <a name="index_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfig"></a>

```python
index_config: GoogleFirestoreFieldIndexConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference">GoogleFirestoreFieldIndexConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeouts"></a>

```python
timeouts: GoogleFirestoreFieldTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference">GoogleFirestoreFieldTimeoutsOutputReference</a>

---

##### `ttl_config`<sup>Required</sup> <a name="ttl_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfig"></a>

```python
ttl_config: GoogleFirestoreFieldTtlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference">GoogleFirestoreFieldTtlConfigOutputReference</a>

---

##### `collection_input`<sup>Optional</sup> <a name="collection_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collectionInput"></a>

```python
collection_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_config_input`<sup>Optional</sup> <a name="index_config_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.indexConfigInput"></a>

```python
index_config_input: GoogleFirestoreFieldIndexConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirestoreFieldTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

---

##### `ttl_config_input`<sup>Optional</sup> <a name="ttl_config_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.ttlConfigInput"></a>

```python
ttl_config_input: GoogleFirestoreFieldTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.collection"></a>

```python
collection: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreFieldConfig <a name="GoogleFirestoreFieldConfig" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection: str,
  field: str,
  database: str = None,
  deletion_policy: str = None,
  id: str = None,
  index_config: GoogleFirestoreFieldIndexConfig = None,
  project: str = None,
  timeouts: GoogleFirestoreFieldTimeouts = None,
  ttl_config: GoogleFirestoreFieldTtlConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.collection">collection</a></code> | <code>str</code> | The id of the collection group to configure. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.field">field</a></code> | <code>str</code> | The id of the field to configure. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.indexConfig">index_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.ttlConfig">ttl_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.collection"></a>

```python
collection: str
```

- *Type:* str

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#collection GoogleFirestoreField#collection}

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.field"></a>

```python
field: str
```

- *Type:* str

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#field GoogleFirestoreField#field}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#database GoogleFirestoreField#database}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#deletion_policy GoogleFirestoreField#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#id GoogleFirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_config`<sup>Optional</sup> <a name="index_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.indexConfig"></a>

```python
index_config: GoogleFirestoreFieldIndexConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#index_config GoogleFirestoreField#index_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#project GoogleFirestoreField#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.timeouts"></a>

```python
timeouts: GoogleFirestoreFieldTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#timeouts GoogleFirestoreField#timeouts}

---

##### `ttl_config`<sup>Optional</sup> <a name="ttl_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldConfig.property.ttlConfig"></a>

```python
ttl_config: GoogleFirestoreFieldTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#ttl_config GoogleFirestoreField#ttl_config}

---

### GoogleFirestoreFieldIndexConfig <a name="GoogleFirestoreFieldIndexConfig" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldIndexConfig(
  indexes: IResolvable | typing.List[GoogleFirestoreFieldIndexConfigIndexes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.property.indexes">indexes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]</code> | indexes block. |

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig.property.indexes"></a>

```python
indexes: IResolvable | typing.List[GoogleFirestoreFieldIndexConfigIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]

indexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#indexes GoogleFirestoreField#indexes}

---

### GoogleFirestoreFieldIndexConfigIndexes <a name="GoogleFirestoreFieldIndexConfigIndexes" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes(
  array_config: str = None,
  order: str = None,
  query_scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.arrayConfig">array_config</a></code> | <code>str</code> | Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.order">order</a></code> | <code>str</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.queryScope">query_scope</a></code> | <code>str</code> | The scope at which a query is run. |

---

##### `array_config`<sup>Optional</sup> <a name="array_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.arrayConfig"></a>

```python
array_config: str
```

- *Type:* str

Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#array_config GoogleFirestoreField#array_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.order"></a>

```python
order: str
```

- *Type:* str

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#order GoogleFirestoreField#order}

---

##### `query_scope`<sup>Optional</sup> <a name="query_scope" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes.property.queryScope"></a>

```python
query_scope: str
```

- *Type:* str

The scope at which a query is run.

Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#query_scope GoogleFirestoreField#query_scope}

---

### GoogleFirestoreFieldTimeouts <a name="GoogleFirestoreFieldTimeouts" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#create GoogleFirestoreField#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#delete GoogleFirestoreField#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#update GoogleFirestoreField#update}.

---

### GoogleFirestoreFieldTtlConfig <a name="GoogleFirestoreFieldTtlConfig" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldTtlConfig(
  expiration_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig.property.expirationOffset">expiration_offset</a></code> | <code>str</code> | The offset, relative to the timestamp value from the field, used to determine the document's expiration time. |

---

##### `expiration_offset`<sup>Optional</sup> <a name="expiration_offset" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig.property.expirationOffset"></a>

```python
expiration_offset: str
```

- *Type:* str

The offset, relative to the timestamp value from the field, used to determine the document's expiration time.

Formatted as the number of seconds followed by 's'. For example, "60s" represents an offset of one minute. The number of seconds must be between 1 and 2147483647 inclusive. To configure no offset, omit this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_field#expiration_offset GoogleFirestoreField#expiration_offset}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreFieldIndexConfigIndexesList <a name="GoogleFirestoreFieldIndexConfigIndexesList" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirestoreFieldIndexConfigIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleFirestoreFieldIndexConfigIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]

---


### GoogleFirestoreFieldIndexConfigIndexesOutputReference <a name="GoogleFirestoreFieldIndexConfigIndexesOutputReference" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig">reset_array_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope">reset_query_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_array_config` <a name="reset_array_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig"></a>

```python
def reset_array_config() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_query_scope` <a name="reset_query_scope" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope"></a>

```python
def reset_query_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput">array_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput">query_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig">array_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScope">query_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `array_config_input`<sup>Optional</sup> <a name="array_config_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput"></a>

```python
array_config_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `query_scope_input`<sup>Optional</sup> <a name="query_scope_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput"></a>

```python
query_scope_input: str
```

- *Type:* str

---

##### `array_config`<sup>Required</sup> <a name="array_config" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig"></a>

```python
array_config: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `query_scope`<sup>Required</sup> <a name="query_scope" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.queryScope"></a>

```python
query_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirestoreFieldIndexConfigIndexes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>

---


### GoogleFirestoreFieldIndexConfigOutputReference <a name="GoogleFirestoreFieldIndexConfigOutputReference" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes">put_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resetIndexes">reset_indexes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_indexes` <a name="put_indexes" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes"></a>

```python
def put_indexes(
  value: IResolvable | typing.List[GoogleFirestoreFieldIndexConfigIndexes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.putIndexes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]

---

##### `reset_indexes` <a name="reset_indexes" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.resetIndexes"></a>

```python
def reset_indexes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexes">indexes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList">GoogleFirestoreFieldIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexesInput">indexes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexes"></a>

```python
indexes: GoogleFirestoreFieldIndexConfigIndexesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexesList">GoogleFirestoreFieldIndexConfigIndexesList</a>

---

##### `indexes_input`<sup>Optional</sup> <a name="indexes_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.indexesInput"></a>

```python
indexes_input: IResolvable | typing.List[GoogleFirestoreFieldIndexConfigIndexes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigIndexes">GoogleFirestoreFieldIndexConfigIndexes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirestoreFieldIndexConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldIndexConfig">GoogleFirestoreFieldIndexConfig</a>

---


### GoogleFirestoreFieldTimeoutsOutputReference <a name="GoogleFirestoreFieldTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirestoreFieldTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTimeouts">GoogleFirestoreFieldTimeouts</a>

---


### GoogleFirestoreFieldTtlConfigOutputReference <a name="GoogleFirestoreFieldTtlConfigOutputReference" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firestore_field

googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resetExpirationOffset">reset_expiration_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_offset` <a name="reset_expiration_offset" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.resetExpirationOffset"></a>

```python
def reset_expiration_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.expirationOffsetInput">expiration_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.expirationOffset">expiration_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `expiration_offset_input`<sup>Optional</sup> <a name="expiration_offset_input" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.expirationOffsetInput"></a>

```python
expiration_offset_input: str
```

- *Type:* str

---

##### `expiration_offset`<sup>Required</sup> <a name="expiration_offset" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.expirationOffset"></a>

```python
expiration_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirestoreFieldTtlConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreField.GoogleFirestoreFieldTtlConfig">GoogleFirestoreFieldTtlConfig</a>

---



