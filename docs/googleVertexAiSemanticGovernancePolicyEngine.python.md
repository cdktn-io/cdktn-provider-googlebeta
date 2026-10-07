# `googleVertexAiSemanticGovernancePolicyEngine` Submodule <a name="`googleVertexAiSemanticGovernancePolicyEngine` Submodule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiSemanticGovernancePolicyEngine <a name="GoogleVertexAiSemanticGovernancePolicyEngine" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine google_vertex_ai_semantic_governance_policy_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  gateway_configs: IResolvable | typing.List[GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiSemanticGovernancePolicyEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.gatewayConfigs">gateway_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]</code> | gateway_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#deletion_policy GoogleVertexAiSemanticGovernancePolicyEngine#deletion_policy}

---

##### `gateway_configs`<sup>Optional</sup> <a name="gateway_configs" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.gatewayConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]

gateway_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#gateway_configs GoogleVertexAiSemanticGovernancePolicyEngine#gateway_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.region"></a>

- *Type:* str

The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#region GoogleVertexAiSemanticGovernancePolicyEngine#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#timeouts GoogleVertexAiSemanticGovernancePolicyEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putGatewayConfigs">put_gateway_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetGatewayConfigs">reset_gateway_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gateway_configs` <a name="put_gateway_configs" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putGatewayConfigs"></a>

```python
def put_gateway_configs(
  value: IResolvable | typing.List[GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putGatewayConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_gateway_configs` <a name="reset_gateway_configs" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetGatewayConfigs"></a>

```python
def reset_gateway_configs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiSemanticGovernancePolicyEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiSemanticGovernancePolicyEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiSemanticGovernancePolicyEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.gatewayConfigs">gateway_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule">psc_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment">psc_service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.gatewayConfigsInput">gateway_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `gateway_configs`<sup>Required</sup> <a name="gateway_configs" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.gatewayConfigs"></a>

```python
gateway_configs: GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psc_forwarding_rule`<sup>Required</sup> <a name="psc_forwarding_rule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule"></a>

```python
psc_forwarding_rule: str
```

- *Type:* str

---

##### `psc_service_attachment`<sup>Required</sup> <a name="psc_service_attachment" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment"></a>

```python
psc_service_attachment: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeouts"></a>

```python
timeouts: GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gateway_configs_input`<sup>Optional</sup> <a name="gateway_configs_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.gatewayConfigsInput"></a>

```python
gateway_configs_input: IResolvable | typing.List[GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiSemanticGovernancePolicyEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiSemanticGovernancePolicyEngineConfig <a name="GoogleVertexAiSemanticGovernancePolicyEngineConfig" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deletion_policy: str = None,
  gateway_configs: IResolvable | typing.List[GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiSemanticGovernancePolicyEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.gatewayConfigs">gateway_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]</code> | gateway_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.region">region</a></code> | <code>str</code> | The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#deletion_policy GoogleVertexAiSemanticGovernancePolicyEngine#deletion_policy}

---

##### `gateway_configs`<sup>Optional</sup> <a name="gateway_configs" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.gatewayConfigs"></a>

```python
gateway_configs: IResolvable | typing.List[GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]

gateway_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#gateway_configs GoogleVertexAiSemanticGovernancePolicyEngine#gateway_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#region GoogleVertexAiSemanticGovernancePolicyEngine#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiSemanticGovernancePolicyEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#timeouts GoogleVertexAiSemanticGovernancePolicyEngine#timeouts}

---

### GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs <a name="GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs(
  name: str,
  allowed_projects: typing.List[str] = None,
  dns_zone_name: str = None,
  network: str = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#name GoogleVertexAiSemanticGovernancePolicyEngine#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.allowedProjects">allowed_projects</a></code> | <code>typing.List[str]</code> | Additional consumer projects permitted to attach their own PSC endpoint to this gateway's ServiceAttachment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | The name of the private Cloud DNS managed zone in which the backend creates the DNS record set for this gateway's PSC endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.network">network</a></code> | <code>str</code> | The URI of the network resource where the gateway's PSC endpoint is provisioned. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.subnetwork">subnetwork</a></code> | <code>str</code> | The URI of the subnetwork resource where the gateway's PSC endpoint is provisioned. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#name GoogleVertexAiSemanticGovernancePolicyEngine#name}.

---

##### `allowed_projects`<sup>Optional</sup> <a name="allowed_projects" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.allowedProjects"></a>

```python
allowed_projects: typing.List[str]
```

- *Type:* typing.List[str]

Additional consumer projects permitted to attach their own PSC endpoint to this gateway's ServiceAttachment.

This is the "decoupled" mode, where
the customer creates the PSC endpoint in a project other than this
gateway's network project. Each listed project is VPC-SC enforced: it
must be within the caller's service perimeter. The owning
SemanticGovernancePolicyEngine's own project is always permitted
implicitly and need not be listed. Format: projects/{project} (ID or number).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#allowed_projects GoogleVertexAiSemanticGovernancePolicyEngine#allowed_projects}

---

##### `dns_zone_name`<sup>Optional</sup> <a name="dns_zone_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

The name of the private Cloud DNS managed zone in which the backend creates the DNS record set for this gateway's PSC endpoint.

This is the
managed-zone resource name, not a fully-qualified domain name. The zone
must already exist and be attached to the gateway's VPC at provision
time. The name must match '^[a-z0-9.-]{1,63}$'. Must be set together
with 'network' and 'subnetwork' (all three or none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#dns_zone_name GoogleVertexAiSemanticGovernancePolicyEngine#dns_zone_name}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.network"></a>

```python
network: str
```

- *Type:* str

The URI of the network resource where the gateway's PSC endpoint is provisioned.

Format: projects/{project}/global/networks/{network}.
'network', 'subnetwork', and 'dns_zone_name' must all be set together
or all omitted; setting only some is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#network GoogleVertexAiSemanticGovernancePolicyEngine#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The URI of the subnetwork resource where the gateway's PSC endpoint is provisioned.

Format:
projects/{project}/regions/{region}/subnetworks/{subnetwork}. Must be
set together with 'network' and 'dns_zone_name' (all three or none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#subnetwork GoogleVertexAiSemanticGovernancePolicyEngine#subnetwork}

---

### GoogleVertexAiSemanticGovernancePolicyEngineTimeouts <a name="GoogleVertexAiSemanticGovernancePolicyEngineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList <a name="GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>]

---


### GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetAllowedProjects">reset_allowed_projects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetDnsZoneName">reset_dns_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_projects` <a name="reset_allowed_projects" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetAllowedProjects"></a>

```python
def reset_allowed_projects() -> None
```

##### `reset_dns_zone_name` <a name="reset_dns_zone_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetDnsZoneName"></a>

```python
def reset_dns_zone_name() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsRecord">dns_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.pscEndpoint">psc_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjectsInput">allowed_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneNameInput">dns_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjects">allowed_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_record`<sup>Required</sup> <a name="dns_record" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsRecord"></a>

```python
dns_record: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `psc_endpoint`<sup>Required</sup> <a name="psc_endpoint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.pscEndpoint"></a>

```python
psc_endpoint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `allowed_projects_input`<sup>Optional</sup> <a name="allowed_projects_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjectsInput"></a>

```python
allowed_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_zone_name_input`<sup>Optional</sup> <a name="dns_zone_name_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneNameInput"></a>

```python
dns_zone_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `allowed_projects`<sup>Required</sup> <a name="allowed_projects" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjects"></a>

```python
allowed_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_zone_name`<sup>Required</sup> <a name="dns_zone_name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs">GoogleVertexAiSemanticGovernancePolicyEngineGatewayConfigs</a>

---


### GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_semantic_governance_policy_engine

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiSemanticGovernancePolicyEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

---



