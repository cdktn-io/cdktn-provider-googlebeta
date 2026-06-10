# `googleFirebaseStorageDefaultBucket` Submodule <a name="`googleFirebaseStorageDefaultBucket` Submodule" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseStorageDefaultBucket <a name="GoogleFirebaseStorageDefaultBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket google_firebase_storage_default_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseStorageDefaultBucketTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.location">location</a></code> | <code>str</code> | The ID of the location where the default Google Cloud Storage bucket will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.location"></a>

- *Type:* str

The ID of the location where the default Google Cloud Storage bucket will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#location GoogleFirebaseStorageDefaultBucket#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#deletion_policy GoogleFirebaseStorageDefaultBucket#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#timeouts GoogleFirebaseStorageDefaultBucket#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseStorageDefaultBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseStorageDefaultBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseStorageDefaultBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket">bucket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket"></a>

```python
bucket: GoogleFirebaseStorageDefaultBucketBucketList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts"></a>

```python
timeouts: GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirebaseStorageDefaultBucketTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseStorageDefaultBucketBucket <a name="GoogleFirebaseStorageDefaultBucketBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket()
```


### GoogleFirebaseStorageDefaultBucketConfig <a name="GoogleFirebaseStorageDefaultBucketConfig" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseStorageDefaultBucketTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location">location</a></code> | <code>str</code> | The ID of the location where the default Google Cloud Storage bucket will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The ID of the location where the default Google Cloud Storage bucket will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#location GoogleFirebaseStorageDefaultBucket#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#deletion_policy GoogleFirebaseStorageDefaultBucket#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseStorageDefaultBucketTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#timeouts GoogleFirebaseStorageDefaultBucket#timeouts}

---

### GoogleFirebaseStorageDefaultBucketTimeouts <a name="GoogleFirebaseStorageDefaultBucketTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseStorageDefaultBucketBucketList <a name="GoogleFirebaseStorageDefaultBucketBucketList" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseStorageDefaultBucketBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseStorageDefaultBucketBucketOutputReference <a name="GoogleFirebaseStorageDefaultBucketBucketOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId">bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId"></a>

```python
bucket_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseStorageDefaultBucketBucket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a>

---


### GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference <a name="GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_storage_default_bucket

googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseStorageDefaultBucketTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---



