# `googleFirebaseAppCheckResourcePolicy` Submodule <a name="`googleFirebaseAppCheckResourcePolicy` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckResourcePolicy <a name="GoogleFirebaseAppCheckResourcePolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy google_firebase_app_check_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_id: str,
  target_resource: str,
  deletion_policy: str = None,
  enforcement_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseAppCheckResourcePolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.targetResource">target_resource</a></code> | <code>str</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.serviceId"></a>

- *Type:* str

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#service_id GoogleFirebaseAppCheckResourcePolicy#service_id}

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.targetResource"></a>

- *Type:* str

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#target_resource GoogleFirebaseAppCheckResourcePolicy#target_resource}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#deletion_policy GoogleFirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.enforcementMode"></a>

- *Type:* str

The App Check enforcement mode for a service supported by App Check.

This will override the EnforcementMode setting on the service.
Valid values are:

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#enforcement_mode GoogleFirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#timeouts GoogleFirebaseAppCheckResourcePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode">reset_enforcement_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_enforcement_mode` <a name="reset_enforcement_mode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode"></a>

```python
def reset_enforcement_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseAppCheckResourcePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseAppCheckResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId">resource_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput">target_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `resource_policy_id`<sup>Required</sup> <a name="resource_policy_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId"></a>

```python
resource_policy_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `target_resource_input`<sup>Optional</sup> <a name="target_resource_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput"></a>

```python
target_resource_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleFirebaseAppCheckResourcePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckResourcePolicyConfig <a name="GoogleFirebaseAppCheckResourcePolicyConfig" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_id: str,
  target_resource: str,
  deletion_policy: str = None,
  enforcement_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseAppCheckResourcePolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId">service_id</a></code> | <code>str</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource">target_resource</a></code> | <code>str</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#service_id GoogleFirebaseAppCheckResourcePolicy#service_id}

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#target_resource GoogleFirebaseAppCheckResourcePolicy#target_resource}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#deletion_policy GoogleFirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

The App Check enforcement mode for a service supported by App Check.

This will override the EnforcementMode setting on the service.
Valid values are:

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#enforcement_mode GoogleFirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAppCheckResourcePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#timeouts GoogleFirebaseAppCheckResourcePolicy#timeouts}

---

### GoogleFirebaseAppCheckResourcePolicyTimeouts <a name="GoogleFirebaseAppCheckResourcePolicyTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference <a name="GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_firebase_app_check_resource_policy

googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleFirebaseAppCheckResourcePolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---



