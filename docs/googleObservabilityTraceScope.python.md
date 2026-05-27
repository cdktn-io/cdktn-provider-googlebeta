# `googleObservabilityTraceScope` Submodule <a name="`googleObservabilityTraceScope` Submodule" id="@cdktn/provider-google-beta.googleObservabilityTraceScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleObservabilityTraceScope <a name="GoogleObservabilityTraceScope" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope google_observability_trace_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScope(
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
  resource_names: typing.List[str],
  trace_scope_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleObservabilityTraceScopeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.location">location</a></code> | <code>str</code> | GCP region the TraceScope is stored in. Only 'global' is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | Names of the projects that are included in this trace scope. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.traceScopeId">trace_scope_id</a></code> | <code>str</code> | A client-assigned identifier for the trace scope. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.description">description</a></code> | <code>str</code> | Describes this trace scope. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#id GoogleObservabilityTraceScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#project GoogleObservabilityTraceScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.location"></a>

- *Type:* str

GCP region the TraceScope is stored in. Only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#location GoogleObservabilityTraceScope#location}

---

##### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.resourceNames"></a>

- *Type:* typing.List[str]

Names of the projects that are included in this trace scope.

* 'projects/[PROJECT_ID]'

A trace scope can include a maximum of 20 projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#resource_names GoogleObservabilityTraceScope#resource_names}

---

##### `trace_scope_id`<sup>Required</sup> <a name="trace_scope_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.traceScopeId"></a>

- *Type:* str

A client-assigned identifier for the trace scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#trace_scope_id GoogleObservabilityTraceScope#trace_scope_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#deletion_policy GoogleObservabilityTraceScope#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.description"></a>

- *Type:* str

Describes this trace scope.

The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#description GoogleObservabilityTraceScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#id GoogleObservabilityTraceScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#project GoogleObservabilityTraceScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#timeouts GoogleObservabilityTraceScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#create GoogleObservabilityTraceScope#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#delete GoogleObservabilityTraceScope#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#update GoogleObservabilityTraceScope#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleObservabilityTraceScope resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleObservabilityTraceScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleObservabilityTraceScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleObservabilityTraceScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleObservabilityTraceScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference">GoogleObservabilityTraceScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.resourceNamesInput">resource_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.traceScopeIdInput">trace_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.traceScopeId">trace_scope_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.timeouts"></a>

```python
timeouts: GoogleObservabilityTraceScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference">GoogleObservabilityTraceScopeTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_names_input`<sup>Optional</sup> <a name="resource_names_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.resourceNamesInput"></a>

```python
resource_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleObservabilityTraceScopeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a>

---

##### `trace_scope_id_input`<sup>Optional</sup> <a name="trace_scope_id_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.traceScopeIdInput"></a>

```python
trace_scope_id_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.resourceNames"></a>

```python
resource_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trace_scope_id`<sup>Required</sup> <a name="trace_scope_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.traceScopeId"></a>

```python
trace_scope_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleObservabilityTraceScopeConfig <a name="GoogleObservabilityTraceScopeConfig" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  resource_names: typing.List[str],
  trace_scope_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleObservabilityTraceScopeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.location">location</a></code> | <code>str</code> | GCP region the TraceScope is stored in. Only 'global' is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | Names of the projects that are included in this trace scope. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.traceScopeId">trace_scope_id</a></code> | <code>str</code> | A client-assigned identifier for the trace scope. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.description">description</a></code> | <code>str</code> | Describes this trace scope. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#id GoogleObservabilityTraceScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#project GoogleObservabilityTraceScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

GCP region the TraceScope is stored in. Only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#location GoogleObservabilityTraceScope#location}

---

##### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.resourceNames"></a>

```python
resource_names: typing.List[str]
```

- *Type:* typing.List[str]

Names of the projects that are included in this trace scope.

* 'projects/[PROJECT_ID]'

A trace scope can include a maximum of 20 projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#resource_names GoogleObservabilityTraceScope#resource_names}

---

##### `trace_scope_id`<sup>Required</sup> <a name="trace_scope_id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.traceScopeId"></a>

```python
trace_scope_id: str
```

- *Type:* str

A client-assigned identifier for the trace scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#trace_scope_id GoogleObservabilityTraceScope#trace_scope_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#deletion_policy GoogleObservabilityTraceScope#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Describes this trace scope.

The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#description GoogleObservabilityTraceScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#id GoogleObservabilityTraceScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#project GoogleObservabilityTraceScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeConfig.property.timeouts"></a>

```python
timeouts: GoogleObservabilityTraceScopeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#timeouts GoogleObservabilityTraceScope#timeouts}

---

### GoogleObservabilityTraceScopeTimeouts <a name="GoogleObservabilityTraceScopeTimeouts" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#create GoogleObservabilityTraceScope#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#delete GoogleObservabilityTraceScope#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#update GoogleObservabilityTraceScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#create GoogleObservabilityTraceScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#delete GoogleObservabilityTraceScope#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_observability_trace_scope#update GoogleObservabilityTraceScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleObservabilityTraceScopeTimeoutsOutputReference <a name="GoogleObservabilityTraceScopeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_observability_trace_scope

googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleObservabilityTraceScopeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleObservabilityTraceScope.GoogleObservabilityTraceScopeTimeouts">GoogleObservabilityTraceScopeTimeouts</a>

---



