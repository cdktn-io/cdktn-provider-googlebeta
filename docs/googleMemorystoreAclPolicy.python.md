# `googleMemorystoreAclPolicy` Submodule <a name="`googleMemorystoreAclPolicy` Submodule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreAclPolicy <a name="GoogleMemorystoreAclPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy google_memorystore_acl_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_policy_id: str,
  location: str,
  rules: IResolvable | typing.List[GoogleMemorystoreAclPolicyRules],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMemorystoreAclPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.aclPolicyId">acl_policy_id</a></code> | <code>str</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_policy_id`<sup>Required</sup> <a name="acl_policy_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.aclPolicyId"></a>

- *Type:* str

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#acl_policy_id GoogleMemorystoreAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#location GoogleMemorystoreAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rules GoogleMemorystoreAclPolicy#rules}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#deletion_policy GoogleMemorystoreAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#timeouts GoogleMemorystoreAclPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[GoogleMemorystoreAclPolicyRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleMemorystoreAclPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleMemorystoreAclPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMemorystoreAclPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMemorystoreAclPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreAclPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList">GoogleMemorystoreAclPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference">GoogleMemorystoreAclPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyIdInput">acl_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyId">acl_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rules"></a>

```python
rules: GoogleMemorystoreAclPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList">GoogleMemorystoreAclPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeouts"></a>

```python
timeouts: GoogleMemorystoreAclPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference">GoogleMemorystoreAclPolicyTimeoutsOutputReference</a>

---

##### `acl_policy_id_input`<sup>Optional</sup> <a name="acl_policy_id_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyIdInput"></a>

```python
acl_policy_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[GoogleMemorystoreAclPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleMemorystoreAclPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---

##### `acl_policy_id`<sup>Required</sup> <a name="acl_policy_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyId"></a>

```python
acl_policy_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreAclPolicyConfig <a name="GoogleMemorystoreAclPolicyConfig" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_policy_id: str,
  location: str,
  rules: IResolvable | typing.List[GoogleMemorystoreAclPolicyRules],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMemorystoreAclPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.aclPolicyId">acl_policy_id</a></code> | <code>str</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_policy_id`<sup>Required</sup> <a name="acl_policy_id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.aclPolicyId"></a>

```python
acl_policy_id: str
```

- *Type:* str

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#acl_policy_id GoogleMemorystoreAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#location GoogleMemorystoreAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[GoogleMemorystoreAclPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rules GoogleMemorystoreAclPolicy#rules}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#deletion_policy GoogleMemorystoreAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleMemorystoreAclPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#timeouts GoogleMemorystoreAclPolicy#timeouts}

---

### GoogleMemorystoreAclPolicyRules <a name="GoogleMemorystoreAclPolicyRules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules(
  rule: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.rule">rule</a></code> | <code>str</code> | The rule to be applied to the username. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.username">username</a></code> | <code>str</code> | Specifies the IAM user or service account to be added to the ACL policy. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.rule"></a>

```python
rule: str
```

- *Type:* str

The rule to be applied to the username.

Ex: "on >password123 ~* +@all"
The format of the rule is defined by Valkey OSS:
https://valkey.io/topics/acl/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rule GoogleMemorystoreAclPolicy#rule}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.username"></a>

```python
username: str
```

- *Type:* str

Specifies the IAM user or service account to be added to the ACL policy.

This username will be directly set on the Valkey OSS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#username GoogleMemorystoreAclPolicy#username}

---

### GoogleMemorystoreAclPolicyTimeouts <a name="GoogleMemorystoreAclPolicyTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreAclPolicyRulesList <a name="GoogleMemorystoreAclPolicyRulesList" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMemorystoreAclPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleMemorystoreAclPolicyRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>]

---


### GoogleMemorystoreAclPolicyRulesOutputReference <a name="GoogleMemorystoreAclPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMemorystoreAclPolicyRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>

---


### GoogleMemorystoreAclPolicyTimeoutsOutputReference <a name="GoogleMemorystoreAclPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_memorystore_acl_policy

googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleMemorystoreAclPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---



