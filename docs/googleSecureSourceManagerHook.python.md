# `googleSecureSourceManagerHook` Submodule <a name="`googleSecureSourceManagerHook` Submodule" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerHook <a name="GoogleSecureSourceManagerHook" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook google_secure_source_manager_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hook_id: str,
  location: str,
  repository_id: str,
  target_uri: str,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  events: typing.List[str] = None,
  id: str = None,
  project: str = None,
  push_option: GoogleSecureSourceManagerHookPushOption = None,
  sensitive_query_string: str = None,
  timeouts: GoogleSecureSourceManagerHookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.hookId">hook_id</a></code> | <code>str</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.targetUri">target_uri</a></code> | <code>str</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.pushOption">push_option</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.sensitiveQueryString">sensitive_query_string</a></code> | <code>str</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.hookId"></a>

- *Type:* str

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#hook_id GoogleSecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.location"></a>

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#location GoogleSecureSourceManagerHook#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.repositoryId"></a>

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#repository_id GoogleSecureSourceManagerHook#repository_id}

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.targetUri"></a>

- *Type:* str

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#target_uri GoogleSecureSourceManagerHook#target_uri}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#deletion_policy GoogleSecureSourceManagerHook#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#disabled GoogleSecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#events GoogleSecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}.

---

##### `push_option`<sup>Optional</sup> <a name="push_option" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.pushOption"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#push_option GoogleSecureSourceManagerHook#push_option}

---

##### `sensitive_query_string`<sup>Optional</sup> <a name="sensitive_query_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.sensitiveQueryString"></a>

- *Type:* str

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#sensitive_query_string GoogleSecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#timeouts GoogleSecureSourceManagerHook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption">put_push_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetEvents">reset_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetPushOption">reset_push_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetSensitiveQueryString">reset_sensitive_query_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_push_option` <a name="put_push_option" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption"></a>

```python
def put_push_option(
  branch_filter: str = None
) -> None
```

###### `branch_filter`<sup>Optional</sup> <a name="branch_filter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption.parameter.branchFilter"></a>

- *Type:* str

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#branch_filter GoogleSecureSourceManagerHook#branch_filter}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_events` <a name="reset_events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetEvents"></a>

```python
def reset_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_push_option` <a name="reset_push_option" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetPushOption"></a>

```python
def reset_push_option() -> None
```

##### `reset_sensitive_query_string` <a name="reset_sensitive_query_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetSensitiveQueryString"></a>

```python
def reset_sensitive_query_string() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleSecureSourceManagerHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleSecureSourceManagerHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecureSourceManagerHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecureSourceManagerHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOption">push_option</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference">GoogleSecureSourceManagerHookPushOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference">GoogleSecureSourceManagerHookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookIdInput">hook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOptionInput">push_option_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryStringInput">sensitive_query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUriInput">target_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookId">hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryString">sensitive_query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUri">target_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `push_option`<sup>Required</sup> <a name="push_option" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOption"></a>

```python
push_option: GoogleSecureSourceManagerHookPushOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference">GoogleSecureSourceManagerHookPushOptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeouts"></a>

```python
timeouts: GoogleSecureSourceManagerHookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference">GoogleSecureSourceManagerHookTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hook_id_input`<sup>Optional</sup> <a name="hook_id_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookIdInput"></a>

```python
hook_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_option_input`<sup>Optional</sup> <a name="push_option_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOptionInput"></a>

```python
push_option_input: GoogleSecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `sensitive_query_string_input`<sup>Optional</sup> <a name="sensitive_query_string_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryStringInput"></a>

```python
sensitive_query_string_input: str
```

- *Type:* str

---

##### `target_uri_input`<sup>Optional</sup> <a name="target_uri_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUriInput"></a>

```python
target_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleSecureSourceManagerHookTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookId"></a>

```python
hook_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `sensitive_query_string`<sup>Required</sup> <a name="sensitive_query_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryString"></a>

```python
sensitive_query_string: str
```

- *Type:* str

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerHookConfig <a name="GoogleSecureSourceManagerHookConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hook_id: str,
  location: str,
  repository_id: str,
  target_uri: str,
  deletion_policy: str = None,
  disabled: bool | IResolvable = None,
  events: typing.List[str] = None,
  id: str = None,
  project: str = None,
  push_option: GoogleSecureSourceManagerHookPushOption = None,
  sensitive_query_string: str = None,
  timeouts: GoogleSecureSourceManagerHookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.hookId">hook_id</a></code> | <code>str</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.targetUri">target_uri</a></code> | <code>str</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.events">events</a></code> | <code>typing.List[str]</code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.pushOption">push_option</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.sensitiveQueryString">sensitive_query_string</a></code> | <code>str</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hook_id`<sup>Required</sup> <a name="hook_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.hookId"></a>

```python
hook_id: str
```

- *Type:* str

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#hook_id GoogleSecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#location GoogleSecureSourceManagerHook#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#repository_id GoogleSecureSourceManagerHook#repository_id}

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#target_uri GoogleSecureSourceManagerHook#target_uri}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#deletion_policy GoogleSecureSourceManagerHook#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#disabled GoogleSecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#events GoogleSecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}.

---

##### `push_option`<sup>Optional</sup> <a name="push_option" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.pushOption"></a>

```python
push_option: GoogleSecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#push_option GoogleSecureSourceManagerHook#push_option}

---

##### `sensitive_query_string`<sup>Optional</sup> <a name="sensitive_query_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.sensitiveQueryString"></a>

```python
sensitive_query_string: str
```

- *Type:* str

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#sensitive_query_string GoogleSecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.timeouts"></a>

```python
timeouts: GoogleSecureSourceManagerHookTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#timeouts GoogleSecureSourceManagerHook#timeouts}

---

### GoogleSecureSourceManagerHookPushOption <a name="GoogleSecureSourceManagerHookPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption(
  branch_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.property.branchFilter">branch_filter</a></code> | <code>str</code> | Trigger hook for matching branches only. |

---

##### `branch_filter`<sup>Optional</sup> <a name="branch_filter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.property.branchFilter"></a>

```python
branch_filter: str
```

- *Type:* str

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#branch_filter GoogleSecureSourceManagerHook#branch_filter}

---

### GoogleSecureSourceManagerHookTimeouts <a name="GoogleSecureSourceManagerHookTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerHookPushOptionOutputReference <a name="GoogleSecureSourceManagerHookPushOptionOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resetBranchFilter">reset_branch_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_filter` <a name="reset_branch_filter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resetBranchFilter"></a>

```python
def reset_branch_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput">branch_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilter">branch_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_filter_input`<sup>Optional</sup> <a name="branch_filter_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput"></a>

```python
branch_filter_input: str
```

- *Type:* str

---

##### `branch_filter`<sup>Required</sup> <a name="branch_filter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilter"></a>

```python
branch_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---


### GoogleSecureSourceManagerHookTimeoutsOutputReference <a name="GoogleSecureSourceManagerHookTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_secure_source_manager_hook

googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleSecureSourceManagerHookTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

---



