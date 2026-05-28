# `googleVmwareengineDatastore` Submodule <a name="`googleVmwareengineDatastore` Submodule" id="@cdktn/provider-google-beta.googleVmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineDatastore <a name="GoogleVmwareengineDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastore(
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
  name: str,
  nfs_datastore: GoogleVmwareengineDatastoreNfsDatastore,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVmwareengineDatastoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.name">name</a></code> | <code>str</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.nfsDatastore">nfs_datastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#location GoogleVmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.name"></a>

- *Type:* str

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#name GoogleVmwareengineDatastore#name}

---

##### `nfs_datastore`<sup>Required</sup> <a name="nfs_datastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.nfsDatastore"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#nfs_datastore GoogleVmwareengineDatastore#nfs_datastore}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#deletion_policy GoogleVmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#description GoogleVmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#timeouts GoogleVmwareengineDatastore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore">put_nfs_datastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_nfs_datastore` <a name="put_nfs_datastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore"></a>

```python
def put_nfs_datastore(
  google_file_service: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService = None,
  third_party_file_service: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService = None
) -> None
```

###### `google_file_service`<sup>Optional</sup> <a name="google_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore.parameter.googleFileService"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#google_file_service GoogleVmwareengineDatastore#google_file_service}

---

###### `third_party_file_service`<sup>Optional</sup> <a name="third_party_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore.parameter.thirdPartyFileService"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#third_party_file_service GoogleVmwareengineDatastore#third_party_file_service}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVmwareengineDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.clusters">clusters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastore">nfs_datastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference">GoogleVmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference">GoogleVmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastoreInput">nfs_datastore_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.clusters"></a>

```python
clusters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `nfs_datastore`<sup>Required</sup> <a name="nfs_datastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastore"></a>

```python
nfs_datastore: GoogleVmwareengineDatastoreNfsDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference">GoogleVmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeouts"></a>

```python
timeouts: GoogleVmwareengineDatastoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference">GoogleVmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_datastore_input`<sup>Optional</sup> <a name="nfs_datastore_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastoreInput"></a>

```python
nfs_datastore_input: GoogleVmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVmwareengineDatastoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineDatastoreConfig <a name="GoogleVmwareengineDatastoreConfig" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  nfs_datastore: GoogleVmwareengineDatastoreNfsDatastore,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVmwareengineDatastoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.name">name</a></code> | <code>str</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.nfsDatastore">nfs_datastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.description">description</a></code> | <code>str</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#location GoogleVmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#name GoogleVmwareengineDatastore#name}

---

##### `nfs_datastore`<sup>Required</sup> <a name="nfs_datastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.nfsDatastore"></a>

```python
nfs_datastore: GoogleVmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#nfs_datastore GoogleVmwareengineDatastore#nfs_datastore}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#deletion_policy GoogleVmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#description GoogleVmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.timeouts"></a>

```python
timeouts: GoogleVmwareengineDatastoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#timeouts GoogleVmwareengineDatastore#timeouts}

---

### GoogleVmwareengineDatastoreNfsDatastore <a name="GoogleVmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore(
  google_file_service: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService = None,
  third_party_file_service: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.googleFileService">google_file_service</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">third_party_file_service</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `google_file_service`<sup>Optional</sup> <a name="google_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```python
google_file_service: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#google_file_service GoogleVmwareengineDatastore#google_file_service}

---

##### `third_party_file_service`<sup>Optional</sup> <a name="third_party_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```python
third_party_file_service: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#third_party_file_service GoogleVmwareengineDatastore#third_party_file_service}

---

### GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService <a name="GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService(
  filestore_instance: str = None,
  netapp_volume: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">filestore_instance</a></code> | <code>str</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">netapp_volume</a></code> | <code>str</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `filestore_instance`<sup>Optional</sup> <a name="filestore_instance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```python
filestore_instance: str
```

- *Type:* str

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#filestore_instance GoogleVmwareengineDatastore#filestore_instance}

---

##### `netapp_volume`<sup>Optional</sup> <a name="netapp_volume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```python
netapp_volume: str
```

- *Type:* str

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#netapp_volume GoogleVmwareengineDatastore#netapp_volume}

---

### GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService(
  file_share: str,
  network: str,
  servers: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">file_share</a></code> | <code>str</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">network</a></code> | <code>str</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">servers</a></code> | <code>typing.List[str]</code> | Server IP addresses of the NFS file service. |

---

##### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```python
file_share: str
```

- *Type:* str

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#file_share GoogleVmwareengineDatastore#file_share}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```python
network: str
```

- *Type:* str

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#network GoogleVmwareengineDatastore#network}

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#servers GoogleVmwareengineDatastore#servers}

---

### GoogleVmwareengineDatastoreTimeouts <a name="GoogleVmwareengineDatastoreTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">reset_filestore_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">reset_netapp_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filestore_instance` <a name="reset_filestore_instance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```python
def reset_filestore_instance() -> None
```

##### `reset_netapp_volume` <a name="reset_netapp_volume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```python
def reset_netapp_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">filestore_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">netapp_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">filestore_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">netapp_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filestore_instance_input`<sup>Optional</sup> <a name="filestore_instance_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```python
filestore_instance_input: str
```

- *Type:* str

---

##### `netapp_volume_input`<sup>Optional</sup> <a name="netapp_volume_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```python
netapp_volume_input: str
```

- *Type:* str

---

##### `filestore_instance`<sup>Required</sup> <a name="filestore_instance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```python
filestore_instance: str
```

- *Type:* str

---

##### `netapp_volume`<sup>Required</sup> <a name="netapp_volume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```python
netapp_volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### GoogleVmwareengineDatastoreNfsDatastoreOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">put_google_file_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">put_third_party_file_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">reset_google_file_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">reset_third_party_file_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_file_service` <a name="put_google_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```python
def put_google_file_service(
  filestore_instance: str = None,
  netapp_volume: str = None
) -> None
```

###### `filestore_instance`<sup>Optional</sup> <a name="filestore_instance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.filestoreInstance"></a>

- *Type:* str

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#filestore_instance GoogleVmwareengineDatastore#filestore_instance}

---

###### `netapp_volume`<sup>Optional</sup> <a name="netapp_volume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.netappVolume"></a>

- *Type:* str

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#netapp_volume GoogleVmwareengineDatastore#netapp_volume}

---

##### `put_third_party_file_service` <a name="put_third_party_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```python
def put_third_party_file_service(
  file_share: str,
  network: str,
  servers: typing.List[str]
) -> None
```

###### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.fileShare"></a>

- *Type:* str

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#file_share GoogleVmwareengineDatastore#file_share}

---

###### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.network"></a>

- *Type:* str

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#network GoogleVmwareengineDatastore#network}

---

###### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.servers"></a>

- *Type:* typing.List[str]

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_vmwareengine_datastore#servers GoogleVmwareengineDatastore#servers}

---

##### `reset_google_file_service` <a name="reset_google_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```python
def reset_google_file_service() -> None
```

##### `reset_third_party_file_service` <a name="reset_third_party_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```python
def reset_third_party_file_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">google_file_service</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">third_party_file_service</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">google_file_service_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">third_party_file_service_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_file_service`<sup>Required</sup> <a name="google_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```python
google_file_service: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `third_party_file_service`<sup>Required</sup> <a name="third_party_file_service" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```python
third_party_file_service: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `google_file_service_input`<sup>Optional</sup> <a name="google_file_service_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```python
google_file_service_input: GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `third_party_file_service_input`<sup>Optional</sup> <a name="third_party_file_service_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```python
third_party_file_service_input: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---


### GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">file_share_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">file_share</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_share_input`<sup>Optional</sup> <a name="file_share_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```python
file_share_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```python
servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```python
file_share: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### GoogleVmwareengineDatastoreTimeoutsOutputReference <a name="GoogleVmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vmwareengine_datastore

googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVmwareengineDatastoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

---



