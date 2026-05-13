# `googleVertexAiFeatureOnlineStoreIamPolicy` Submodule <a name="`googleVertexAiFeatureOnlineStoreIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreIamPolicy <a name="GoogleVertexAiFeatureOnlineStoreIamPolicy" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy google_vertex_ai_feature_online_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_feature_online_store_iam_policy

googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_online_store: str,
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreIamPolicy#feature_online_store}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#id GoogleVertexAiFeatureOnlineStoreIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#project GoogleVertexAiFeatureOnlineStoreIamPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#region GoogleVertexAiFeatureOnlineStoreIamPolicy#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.featureOnlineStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreIamPolicy#feature_online_store}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#id GoogleVertexAiFeatureOnlineStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#project GoogleVertexAiFeatureOnlineStoreIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#region GoogleVertexAiFeatureOnlineStoreIamPolicy#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiFeatureOnlineStoreIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_feature_online_store_iam_policy

googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_feature_online_store_iam_policy

googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_feature_online_store_iam_policy

googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_feature_online_store_iam_policy

googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiFeatureOnlineStoreIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeatureOnlineStoreIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStoreInput">feature_online_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `feature_online_store_input`<sup>Optional</sup> <a name="feature_online_store_input" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStoreInput"></a>

```python
feature_online_store_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreIamPolicyConfig <a name="GoogleVertexAiFeatureOnlineStoreIamPolicyConfig" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_feature_online_store_iam_policy

googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_online_store: str,
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreIamPolicy#feature_online_store}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#id GoogleVertexAiFeatureOnlineStoreIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#project GoogleVertexAiFeatureOnlineStoreIamPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#region GoogleVertexAiFeatureOnlineStoreIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreIamPolicy#feature_online_store}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#id GoogleVertexAiFeatureOnlineStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#project GoogleVertexAiFeatureOnlineStoreIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamPolicy.GoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_feature_online_store_iam_policy#region GoogleVertexAiFeatureOnlineStoreIamPolicy#region}.

---



