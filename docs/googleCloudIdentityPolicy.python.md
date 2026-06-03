# `googleCloudIdentityPolicy` Submodule <a name="`googleCloudIdentityPolicy` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityPolicy <a name="GoogleCloudIdentityPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy google_cloud_identity_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer: str,
  policy_query: GoogleCloudIdentityPolicyPolicyQuery,
  setting: GoogleCloudIdentityPolicySetting,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleCloudIdentityPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.customer">customer</a></code> | <code>str</code> | The customer that the Policy belongs to. Format: 'customers/{customer_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.policyQuery">policy_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | policy_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.setting">setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#id GoogleCloudIdentityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.customer"></a>

- *Type:* str

The customer that the Policy belongs to. Format: 'customers/{customer_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#customer GoogleCloudIdentityPolicy#customer}

---

##### `policy_query`<sup>Required</sup> <a name="policy_query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.policyQuery"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

policy_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#policy_query GoogleCloudIdentityPolicy#policy_query}

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.setting"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#setting GoogleCloudIdentityPolicy#setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#deletion_policy GoogleCloudIdentityPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#id GoogleCloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#timeouts GoogleCloudIdentityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery">put_policy_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting">put_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy_query` <a name="put_policy_query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery"></a>

```python
def put_policy_query(
  org_unit: str,
  group: str = None,
  query: str = None
) -> None
```

###### `org_unit`<sup>Required</sup> <a name="org_unit" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery.parameter.orgUnit"></a>

- *Type:* str

The OrgUnit the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#org_unit GoogleCloudIdentityPolicy#org_unit}

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery.parameter.group"></a>

- *Type:* str

The group that the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#group GoogleCloudIdentityPolicy#group}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery.parameter.query"></a>

- *Type:* str

The CEL query that defines which entities the Policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#query GoogleCloudIdentityPolicy#query}

---

##### `put_setting` <a name="put_setting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting"></a>

```python
def put_setting(
  type: str,
  value_json: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting.parameter.type"></a>

- *Type:* str

The type of the Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#type GoogleCloudIdentityPolicy#type}

---

###### `value_json`<sup>Required</sup> <a name="value_json" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting.parameter.valueJson"></a>

- *Type:* str

The value of the Setting as JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#value_json GoogleCloudIdentityPolicy#value_json}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#create GoogleCloudIdentityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#delete GoogleCloudIdentityPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#update GoogleCloudIdentityPolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCloudIdentityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudIdentityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudIdentityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQuery">policy_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference">GoogleCloudIdentityPolicyPolicyQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference">GoogleCloudIdentityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference">GoogleCloudIdentityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customerInput">customer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQueryInput">policy_query_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.settingInput">setting_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_query`<sup>Required</sup> <a name="policy_query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQuery"></a>

```python
policy_query: GoogleCloudIdentityPolicyPolicyQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference">GoogleCloudIdentityPolicyPolicyQueryOutputReference</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.setting"></a>

```python
setting: GoogleCloudIdentityPolicySettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference">GoogleCloudIdentityPolicySettingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeouts"></a>

```python
timeouts: GoogleCloudIdentityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference">GoogleCloudIdentityPolicyTimeoutsOutputReference</a>

---

##### `customer_input`<sup>Optional</sup> <a name="customer_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customerInput"></a>

```python
customer_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_query_input`<sup>Optional</sup> <a name="policy_query_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQueryInput"></a>

```python
policy_query_input: GoogleCloudIdentityPolicyPolicyQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

---

##### `setting_input`<sup>Optional</sup> <a name="setting_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.settingInput"></a>

```python
setting_input: GoogleCloudIdentityPolicySetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCloudIdentityPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityPolicyConfig <a name="GoogleCloudIdentityPolicyConfig" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  customer: str,
  policy_query: GoogleCloudIdentityPolicyPolicyQuery,
  setting: GoogleCloudIdentityPolicySetting,
  deletion_policy: str = None,
  id: str = None,
  timeouts: GoogleCloudIdentityPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.customer">customer</a></code> | <code>str</code> | The customer that the Policy belongs to. Format: 'customers/{customer_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.policyQuery">policy_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | policy_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#id GoogleCloudIdentityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.customer"></a>

```python
customer: str
```

- *Type:* str

The customer that the Policy belongs to. Format: 'customers/{customer_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#customer GoogleCloudIdentityPolicy#customer}

---

##### `policy_query`<sup>Required</sup> <a name="policy_query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.policyQuery"></a>

```python
policy_query: GoogleCloudIdentityPolicyPolicyQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

policy_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#policy_query GoogleCloudIdentityPolicy#policy_query}

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.setting"></a>

```python
setting: GoogleCloudIdentityPolicySetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#setting GoogleCloudIdentityPolicy#setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#deletion_policy GoogleCloudIdentityPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#id GoogleCloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudIdentityPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#timeouts GoogleCloudIdentityPolicy#timeouts}

---

### GoogleCloudIdentityPolicyPolicyQuery <a name="GoogleCloudIdentityPolicyPolicyQuery" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery(
  org_unit: str,
  group: str = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.orgUnit">org_unit</a></code> | <code>str</code> | The OrgUnit the query applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.group">group</a></code> | <code>str</code> | The group that the query applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.query">query</a></code> | <code>str</code> | The CEL query that defines which entities the Policy applies to. |

---

##### `org_unit`<sup>Required</sup> <a name="org_unit" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.orgUnit"></a>

```python
org_unit: str
```

- *Type:* str

The OrgUnit the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#org_unit GoogleCloudIdentityPolicy#org_unit}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.group"></a>

```python
group: str
```

- *Type:* str

The group that the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#group GoogleCloudIdentityPolicy#group}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.query"></a>

```python
query: str
```

- *Type:* str

The CEL query that defines which entities the Policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#query GoogleCloudIdentityPolicy#query}

---

### GoogleCloudIdentityPolicySetting <a name="GoogleCloudIdentityPolicySetting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting(
  type: str,
  value_json: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.type">type</a></code> | <code>str</code> | The type of the Setting. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.valueJson">value_json</a></code> | <code>str</code> | The value of the Setting as JSON string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#type GoogleCloudIdentityPolicy#type}

---

##### `value_json`<sup>Required</sup> <a name="value_json" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.valueJson"></a>

```python
value_json: str
```

- *Type:* str

The value of the Setting as JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#value_json GoogleCloudIdentityPolicy#value_json}

---

### GoogleCloudIdentityPolicyTimeouts <a name="GoogleCloudIdentityPolicyTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#create GoogleCloudIdentityPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#delete GoogleCloudIdentityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#update GoogleCloudIdentityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#create GoogleCloudIdentityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#delete GoogleCloudIdentityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_cloud_identity_policy#update GoogleCloudIdentityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityPolicyPolicyQueryOutputReference <a name="GoogleCloudIdentityPolicyPolicyQueryOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group` <a name="reset_group" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput">org_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit">org_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `org_unit_input`<sup>Optional</sup> <a name="org_unit_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput"></a>

```python
org_unit_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `org_unit`<sup>Required</sup> <a name="org_unit" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit"></a>

```python
org_unit: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudIdentityPolicyPolicyQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

---


### GoogleCloudIdentityPolicySettingOutputReference <a name="GoogleCloudIdentityPolicySettingOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJsonInput">value_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJson">value_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_json_input`<sup>Optional</sup> <a name="value_json_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJsonInput"></a>

```python
value_json_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value_json`<sup>Required</sup> <a name="value_json" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJson"></a>

```python
value_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudIdentityPolicySetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

---


### GoogleCloudIdentityPolicyTimeoutsOutputReference <a name="GoogleCloudIdentityPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_identity_policy

googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudIdentityPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

---



