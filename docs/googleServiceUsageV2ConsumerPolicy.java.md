# `googleServiceUsageV2ConsumerPolicy` Submodule <a name="`googleServiceUsageV2ConsumerPolicy` Submodule" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceUsageV2ConsumerPolicy <a name="GoogleServiceUsageV2ConsumerPolicy" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy google_service_usage_v2_consumer_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicy;

GoogleServiceUsageV2ConsumerPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enableRules(IResolvable|java.util.List<GoogleServiceUsageV2ConsumerPolicyEnableRules>)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .checkUsageOnRemove(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleServiceUsageV2ConsumerPolicyTimeouts)
//  .validateDependencies(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.enableRules">enableRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>></code> | enable_rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. Currently only the “default” policy name is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.checkUsageOnRemove">checkUsageOnRemove</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Optional) Default value is false. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#id GoogleServiceUsageV2ConsumerPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.validateDependencies">validateDependencies</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Optional) Default value is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enableRules`<sup>Required</sup> <a name="enableRules" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.enableRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>>

enable_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#enable_rules GoogleServiceUsageV2ConsumerPolicy#enable_rules}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy. Currently only the “default” policy name is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#name GoogleServiceUsageV2ConsumerPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent.

It can be a project, folder or organization in the format of  projects/<project_id or project_number>, folders/<folder_number> or organizations/<org_number> .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#parent GoogleServiceUsageV2ConsumerPolicy#parent}

---

##### `checkUsageOnRemove`<sup>Optional</sup> <a name="checkUsageOnRemove" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.checkUsageOnRemove"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Optional) Default value is false.

If true, the usage of the service to be removed will be checked. If the service has been used within the past 30 days or was enabled in the last 3 days, an error will be thrown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#check_usage_on_remove GoogleServiceUsageV2ConsumerPolicy#check_usage_on_remove}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#deletion_policy GoogleServiceUsageV2ConsumerPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#id GoogleServiceUsageV2ConsumerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#timeouts GoogleServiceUsageV2ConsumerPolicy#timeouts}

---

##### `validateDependencies`<sup>Optional</sup> <a name="validateDependencies" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.Initializer.parameter.validateDependencies"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Optional) Default value is true.

If true, this flag enforces dependency management within the consumer policy. When adding a new service, it verifies that all its dependencies are already present/added in the policy. Conversely, when removing a service, it ensures that no other services within the policy depend on the service to be removed. If the validation fails, a comprehensive message will be presented, outlining the missing dependencies and providing instructions on how to address the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#validate_dependencies GoogleServiceUsageV2ConsumerPolicy#validate_dependencies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.putEnableRules">putEnableRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetCheckUsageOnRemove">resetCheckUsageOnRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetValidateDependencies">resetValidateDependencies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnableRules` <a name="putEnableRules" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.putEnableRules"></a>

```java
public void putEnableRules(IResolvable|java.util.List<GoogleServiceUsageV2ConsumerPolicyEnableRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.putEnableRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleServiceUsageV2ConsumerPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a>

---

##### `resetCheckUsageOnRemove` <a name="resetCheckUsageOnRemove" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetCheckUsageOnRemove"></a>

```java
public void resetCheckUsageOnRemove()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidateDependencies` <a name="resetValidateDependencies" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.resetValidateDependencies"></a>

```java
public void resetValidateDependencies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleServiceUsageV2ConsumerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicy;

GoogleServiceUsageV2ConsumerPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicy;

GoogleServiceUsageV2ConsumerPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicy;

GoogleServiceUsageV2ConsumerPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicy;

GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleServiceUsageV2ConsumerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleServiceUsageV2ConsumerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleServiceUsageV2ConsumerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleServiceUsageV2ConsumerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.enableRules">enableRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList">GoogleServiceUsageV2ConsumerPolicyEnableRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference">GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.checkUsageOnRemoveInput">checkUsageOnRemoveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.enableRulesInput">enableRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.validateDependenciesInput">validateDependenciesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.checkUsageOnRemove">checkUsageOnRemove</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.validateDependencies">validateDependencies</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enableRules`<sup>Required</sup> <a name="enableRules" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.enableRules"></a>

```java
public GoogleServiceUsageV2ConsumerPolicyEnableRulesList getEnableRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList">GoogleServiceUsageV2ConsumerPolicyEnableRulesList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.timeouts"></a>

```java
public GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference">GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference</a>

---

##### `checkUsageOnRemoveInput`<sup>Optional</sup> <a name="checkUsageOnRemoveInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.checkUsageOnRemoveInput"></a>

```java
public java.lang.Boolean|IResolvable getCheckUsageOnRemoveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableRulesInput`<sup>Optional</sup> <a name="enableRulesInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.enableRulesInput"></a>

```java
public IResolvable|java.util.List<GoogleServiceUsageV2ConsumerPolicyEnableRules> getEnableRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleServiceUsageV2ConsumerPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a>

---

##### `validateDependenciesInput`<sup>Optional</sup> <a name="validateDependenciesInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.validateDependenciesInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateDependenciesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `checkUsageOnRemove`<sup>Required</sup> <a name="checkUsageOnRemove" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.checkUsageOnRemove"></a>

```java
public java.lang.Boolean|IResolvable getCheckUsageOnRemove();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `validateDependencies`<sup>Required</sup> <a name="validateDependencies" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.validateDependencies"></a>

```java
public java.lang.Boolean|IResolvable getValidateDependencies();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceUsageV2ConsumerPolicyConfig <a name="GoogleServiceUsageV2ConsumerPolicyConfig" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicyConfig;

GoogleServiceUsageV2ConsumerPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enableRules(IResolvable|java.util.List<GoogleServiceUsageV2ConsumerPolicyEnableRules>)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .checkUsageOnRemove(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleServiceUsageV2ConsumerPolicyTimeouts)
//  .validateDependencies(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.enableRules">enableRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>></code> | enable_rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. Currently only the “default” policy name is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.checkUsageOnRemove">checkUsageOnRemove</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Optional) Default value is false. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#id GoogleServiceUsageV2ConsumerPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.validateDependencies">validateDependencies</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Optional) Default value is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enableRules`<sup>Required</sup> <a name="enableRules" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.enableRules"></a>

```java
public IResolvable|java.util.List<GoogleServiceUsageV2ConsumerPolicyEnableRules> getEnableRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>>

enable_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#enable_rules GoogleServiceUsageV2ConsumerPolicy#enable_rules}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy. Currently only the “default” policy name is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#name GoogleServiceUsageV2ConsumerPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent.

It can be a project, folder or organization in the format of  projects/<project_id or project_number>, folders/<folder_number> or organizations/<org_number> .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#parent GoogleServiceUsageV2ConsumerPolicy#parent}

---

##### `checkUsageOnRemove`<sup>Optional</sup> <a name="checkUsageOnRemove" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.checkUsageOnRemove"></a>

```java
public java.lang.Boolean|IResolvable getCheckUsageOnRemove();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Optional) Default value is false.

If true, the usage of the service to be removed will be checked. If the service has been used within the past 30 days or was enabled in the last 3 days, an error will be thrown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#check_usage_on_remove GoogleServiceUsageV2ConsumerPolicy#check_usage_on_remove}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#deletion_policy GoogleServiceUsageV2ConsumerPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#id GoogleServiceUsageV2ConsumerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.timeouts"></a>

```java
public GoogleServiceUsageV2ConsumerPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#timeouts GoogleServiceUsageV2ConsumerPolicy#timeouts}

---

##### `validateDependencies`<sup>Optional</sup> <a name="validateDependencies" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyConfig.property.validateDependencies"></a>

```java
public java.lang.Boolean|IResolvable getValidateDependencies();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Optional) Default value is true.

If true, this flag enforces dependency management within the consumer policy. When adding a new service, it verifies that all its dependencies are already present/added in the policy. Conversely, when removing a service, it ensures that no other services within the policy depend on the service to be removed. If the validation fails, a comprehensive message will be presented, outlining the missing dependencies and providing instructions on how to address the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#validate_dependencies GoogleServiceUsageV2ConsumerPolicy#validate_dependencies}

---

### GoogleServiceUsageV2ConsumerPolicyEnableRules <a name="GoogleServiceUsageV2ConsumerPolicyEnableRules" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicyEnableRules;

GoogleServiceUsageV2ConsumerPolicyEnableRules.builder()
//  .services(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | (Optional): List of service names to be enabled in the format of services/<service_name>. |

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

(Optional): List of service names to be enabled in the format of services/<service_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#services GoogleServiceUsageV2ConsumerPolicy#services}

---

### GoogleServiceUsageV2ConsumerPolicyTimeouts <a name="GoogleServiceUsageV2ConsumerPolicyTimeouts" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicyTimeouts;

GoogleServiceUsageV2ConsumerPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#create GoogleServiceUsageV2ConsumerPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#delete GoogleServiceUsageV2ConsumerPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#update GoogleServiceUsageV2ConsumerPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#create GoogleServiceUsageV2ConsumerPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#delete GoogleServiceUsageV2ConsumerPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_service_usage_v2_consumer_policy#update GoogleServiceUsageV2ConsumerPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceUsageV2ConsumerPolicyEnableRulesList <a name="GoogleServiceUsageV2ConsumerPolicyEnableRulesList" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList;

new GoogleServiceUsageV2ConsumerPolicyEnableRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.get"></a>

```java
public GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleServiceUsageV2ConsumerPolicyEnableRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>>

---


### GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference <a name="GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference;

new GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServices` <a name="resetServices" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.resetServices"></a>

```java
public void resetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleServiceUsageV2ConsumerPolicyEnableRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyEnableRules">GoogleServiceUsageV2ConsumerPolicyEnableRules</a>

---


### GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference <a name="GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_usage_v2_consumer_policy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference;

new GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleServiceUsageV2ConsumerPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceUsageV2ConsumerPolicy.GoogleServiceUsageV2ConsumerPolicyTimeouts">GoogleServiceUsageV2ConsumerPolicyTimeouts</a>

---



