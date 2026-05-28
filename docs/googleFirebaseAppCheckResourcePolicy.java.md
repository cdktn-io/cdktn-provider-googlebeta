# `googleFirebaseAppCheckResourcePolicy` Submodule <a name="`googleFirebaseAppCheckResourcePolicy` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckResourcePolicy <a name="GoogleFirebaseAppCheckResourcePolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy google_firebase_app_check_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicy;

GoogleFirebaseAppCheckResourcePolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceId(java.lang.String)
    .targetResource(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .enforcementMode(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckResourcePolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.targetResource">targetResource</a></code> | <code>java.lang.String</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#service_id GoogleFirebaseAppCheckResourcePolicy#service_id}

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.targetResource"></a>

- *Type:* java.lang.String

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#target_resource GoogleFirebaseAppCheckResourcePolicy#target_resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#deletion_policy GoogleFirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.enforcementMode"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#enforcement_mode GoogleFirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#timeouts GoogleFirebaseAppCheckResourcePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode">resetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAppCheckResourcePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEnforcementMode` <a name="resetEnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode"></a>

```java
public void resetEnforcementMode()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicy;

GoogleFirebaseAppCheckResourcePolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicy;

GoogleFirebaseAppCheckResourcePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicy;

GoogleFirebaseAppCheckResourcePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicy;

GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAppCheckResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAppCheckResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId">resourcePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput">enforcementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput">targetResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `resourcePolicyId`<sup>Required</sup> <a name="resourcePolicyId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId"></a>

```java
public java.lang.String getResourcePolicyId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput"></a>

```java
public java.lang.String getEnforcementModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceInput`<sup>Optional</sup> <a name="targetResourceInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput"></a>

```java
public java.lang.String getTargetResourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirebaseAppCheckResourcePolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckResourcePolicyConfig <a name="GoogleFirebaseAppCheckResourcePolicyConfig" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicyConfig;

GoogleFirebaseAppCheckResourcePolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceId(java.lang.String)
    .targetResource(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .enforcementMode(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckResourcePolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#service_id GoogleFirebaseAppCheckResourcePolicy#service_id}

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#target_resource GoogleFirebaseAppCheckResourcePolicy#target_resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#deletion_policy GoogleFirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#enforcement_mode GoogleFirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckResourcePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#timeouts GoogleFirebaseAppCheckResourcePolicy#timeouts}

---

### GoogleFirebaseAppCheckResourcePolicyTimeouts <a name="GoogleFirebaseAppCheckResourcePolicyTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicyTimeouts;

GoogleFirebaseAppCheckResourcePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference <a name="GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_app_check_resource_policy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference;

new GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseAppCheckResourcePolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---



