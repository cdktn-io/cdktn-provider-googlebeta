# `dataGoogleBeyondcorpSecurityGateway` Submodule <a name="`dataGoogleBeyondcorpSecurityGateway` Submodule" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGateway <a name="DataGoogleBeyondcorpSecurityGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_gateway_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId"></a>

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#security_gateway_id DataGoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleBeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount">delegating_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList">DataGoogleBeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList">DataGoogleBeyondcorpSecurityGatewayLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig">proxy_protocol_config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput">security_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delegating_service_account`<sup>Required</sup> <a name="delegating_service_account" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```python
delegating_service_account: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.hubs"></a>

```python
hubs: DataGoogleBeyondcorpSecurityGatewayHubsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList">DataGoogleBeyondcorpSecurityGatewayHubsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.logging"></a>

```python
logging: DataGoogleBeyondcorpSecurityGatewayLoggingList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList">DataGoogleBeyondcorpSecurityGatewayLoggingList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proxy_protocol_config`<sup>Required</sup> <a name="proxy_protocol_config" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig"></a>

```python
proxy_protocol_config: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList</a>

---

##### `service_discovery`<sup>Required</sup> <a name="service_discovery" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.serviceDiscovery"></a>

```python
service_discovery: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_gateway_id_input`<sup>Optional</sup> <a name="security_gateway_id_input" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```python
security_gateway_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayConfig <a name="DataGoogleBeyondcorpSecurityGatewayConfig" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_gateway_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#security_gateway_id DataGoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}.

---

### DataGoogleBeyondcorpSecurityGatewayHubs <a name="DataGoogleBeyondcorpSecurityGatewayHubs" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs()
```


### DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway()
```


### DataGoogleBeyondcorpSecurityGatewayLogging <a name="DataGoogleBeyondcorpSecurityGatewayLogging" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging()
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig()
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders()
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo()
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo()
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo()
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscovery <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscovery" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery()
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway()
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assigned_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway">DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigned_ips`<sup>Required</sup> <a name="assigned_ips" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```python
assigned_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway">DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### DataGoogleBeyondcorpSecurityGatewayHubsList <a name="DataGoogleBeyondcorpSecurityGatewayHubsList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayHubsOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayHubsOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList">DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs">DataGoogleBeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internet_gateway`<sup>Required</sup> <a name="internet_gateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```python
internet_gateway: DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList">DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayHubs
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs">DataGoogleBeyondcorpSecurityGatewayHubs</a>

---


### DataGoogleBeyondcorpSecurityGatewayLoggingList <a name="DataGoogleBeyondcorpSecurityGatewayLoggingList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging">DataGoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayLogging
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging">DataGoogleBeyondcorpSecurityGatewayLogging</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo">device_info</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo">group_info</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo">user_info</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_info`<sup>Required</sup> <a name="device_info" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo"></a>

```python
device_info: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList</a>

---

##### `group_info`<sup>Required</sup> <a name="group_info" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo"></a>

```python
group_info: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList</a>

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `user_info`<sup>Required</sup> <a name="user_info" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo"></a>

```python
user_info: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders">allowed_client_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp">client_ip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders">contextual_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity">gateway_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders">metadata_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_client_headers`<sup>Required</sup> <a name="allowed_client_headers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders"></a>

```python
allowed_client_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_ip`<sup>Required</sup> <a name="client_ip" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp"></a>

```python
client_ip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `contextual_headers`<sup>Required</sup> <a name="contextual_headers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders"></a>

```python
contextual_headers: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList</a>

---

##### `gateway_identity`<sup>Required</sup> <a name="gateway_identity" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity"></a>

```python
gateway_identity: str
```

- *Type:* str

---

##### `metadata_headers`<sup>Required</sup> <a name="metadata_headers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders"></a>

```python
metadata_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride">resource_override</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_override`<sup>Required</sup> <a name="resource_override" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride"></a>

```python
resource_override: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_beyondcorp_security_gateway

dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway">api_gateway</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery">DataGoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_gateway`<sup>Required</sup> <a name="api_gateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway"></a>

```python
api_gateway: DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleBeyondcorpSecurityGatewayServiceDiscovery
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery">DataGoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---



