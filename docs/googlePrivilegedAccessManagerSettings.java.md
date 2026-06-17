# `googlePrivilegedAccessManagerSettings` Submodule <a name="`googlePrivilegedAccessManagerSettings` Submodule" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerSettings <a name="GooglePrivilegedAccessManagerSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings google_privileged_access_manager_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettings;

GooglePrivilegedAccessManagerSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .emailNotificationSettings(GooglePrivilegedAccessManagerSettingsEmailNotificationSettings)
//  .id(java.lang.String)
//  .serviceAccountApproverSettings(GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings)
//  .timeouts(GooglePrivilegedAccessManagerSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the PAM settings resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.emailNotificationSettings">emailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | email_notification_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.serviceAccountApproverSettings">serviceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | service_account_approver_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the PAM settings resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#location GooglePrivilegedAccessManagerSettings#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#parent GooglePrivilegedAccessManagerSettings#parent}

---

##### `emailNotificationSettings`<sup>Optional</sup> <a name="emailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.emailNotificationSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

email_notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#email_notification_settings GooglePrivilegedAccessManagerSettings#email_notification_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceAccountApproverSettings`<sup>Optional</sup> <a name="serviceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.serviceAccountApproverSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

service_account_approver_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#service_account_approver_settings GooglePrivilegedAccessManagerSettings#service_account_approver_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#timeouts GooglePrivilegedAccessManagerSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings">putEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings">putServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings">resetEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings">resetServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailNotificationSettings` <a name="putEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings"></a>

```java
public void putEmailNotificationSettings(GooglePrivilegedAccessManagerSettingsEmailNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `putServiceAccountApproverSettings` <a name="putServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings"></a>

```java
public void putServiceAccountApproverSettings(GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts"></a>

```java
public void putTimeouts(GooglePrivilegedAccessManagerSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `resetEmailNotificationSettings` <a name="resetEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings"></a>

```java
public void resetEmailNotificationSettings()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId"></a>

```java
public void resetId()
```

##### `resetServiceAccountApproverSettings` <a name="resetServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings"></a>

```java
public void resetServiceAccountApproverSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettings;

GooglePrivilegedAccessManagerSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettings;

GooglePrivilegedAccessManagerSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettings;

GooglePrivilegedAccessManagerSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettings;

GooglePrivilegedAccessManagerSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePrivilegedAccessManagerSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePrivilegedAccessManagerSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePrivilegedAccessManagerSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings">emailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings">serviceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput">emailNotificationSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput">serviceAccountApproverSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `emailNotificationSettings`<sup>Required</sup> <a name="emailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference getEmailNotificationSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccountApproverSettings`<sup>Required</sup> <a name="serviceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings"></a>

```java
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference getServiceAccountApproverSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts"></a>

```java
public GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `emailNotificationSettingsInput`<sup>Optional</sup> <a name="emailNotificationSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettings getEmailNotificationSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountApproverSettingsInput`<sup>Optional</sup> <a name="serviceAccountApproverSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings getServiceAccountApproverSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput"></a>

```java
public IResolvable|GooglePrivilegedAccessManagerSettingsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerSettingsConfig <a name="GooglePrivilegedAccessManagerSettingsConfig" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsConfig;

GooglePrivilegedAccessManagerSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .emailNotificationSettings(GooglePrivilegedAccessManagerSettingsEmailNotificationSettings)
//  .id(java.lang.String)
//  .serviceAccountApproverSettings(GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings)
//  .timeouts(GooglePrivilegedAccessManagerSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the PAM settings resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings">emailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | email_notification_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings">serviceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | service_account_approver_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the PAM settings resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#location GooglePrivilegedAccessManagerSettings#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#parent GooglePrivilegedAccessManagerSettings#parent}

---

##### `emailNotificationSettings`<sup>Optional</sup> <a name="emailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettings getEmailNotificationSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

email_notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#email_notification_settings GooglePrivilegedAccessManagerSettings#email_notification_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceAccountApproverSettings`<sup>Optional</sup> <a name="serviceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings"></a>

```java
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings getServiceAccountApproverSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

service_account_approver_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#service_account_approver_settings GooglePrivilegedAccessManagerSettings#service_account_approver_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts"></a>

```java
public GooglePrivilegedAccessManagerSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#timeouts GooglePrivilegedAccessManagerSettings#timeouts}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettings <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings;

GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.builder()
//  .customNotificationBehavior(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior)
//  .disableAllNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior">customNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | custom_notification_behavior block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications">disableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | disable_all_notifications block. |

---

##### `customNotificationBehavior`<sup>Optional</sup> <a name="customNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior getCustomNotificationBehavior();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

custom_notification_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#custom_notification_behavior GooglePrivilegedAccessManagerSettings#custom_notification_behavior}

---

##### `disableAllNotifications`<sup>Optional</sup> <a name="disableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications getDisableAllNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

disable_all_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#disable_all_notifications GooglePrivilegedAccessManagerSettings#disable_all_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior;

GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.builder()
//  .adminNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications)
//  .approverNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications)
//  .requesterNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications">requesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | requester_notifications block. |

---

##### `adminNotifications`<sup>Optional</sup> <a name="adminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications getAdminNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#admin_notifications GooglePrivilegedAccessManagerSettings#admin_notifications}

---

##### `approverNotifications`<sup>Optional</sup> <a name="approverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications getApproverNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#approver_notifications GooglePrivilegedAccessManagerSettings#approver_notifications}

---

##### `requesterNotifications`<sup>Optional</sup> <a name="requesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications getRequesterNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

requester_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#requester_notifications GooglePrivilegedAccessManagerSettings#requester_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications;

GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.builder()
//  .grantActivated(java.lang.String)
//  .grantActivationFailed(java.lang.String)
//  .grantEnded(java.lang.String)
//  .grantExternallyModified(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated">grantActivated</a></code> | <code>java.lang.String</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed">grantActivationFailed</a></code> | <code>java.lang.String</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded">grantEnded</a></code> | <code>java.lang.String</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified">grantExternallyModified</a></code> | <code>java.lang.String</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `grantActivated`<sup>Optional</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated"></a>

```java
public java.lang.String getGrantActivated();
```

- *Type:* java.lang.String

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `grantActivationFailed`<sup>Optional</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed"></a>

```java
public java.lang.String getGrantActivationFailed();
```

- *Type:* java.lang.String

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `grantEnded`<sup>Optional</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded"></a>

```java
public java.lang.String getGrantEnded();
```

- *Type:* java.lang.String

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `grantExternallyModified`<sup>Optional</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified"></a>

```java
public java.lang.String getGrantExternallyModified();
```

- *Type:* java.lang.String

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications;

GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.builder()
//  .pendingApproval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval">pendingApproval</a></code> | <code>java.lang.String</code> | Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `pendingApproval`<sup>Optional</sup> <a name="pendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval"></a>

```java
public java.lang.String getPendingApproval();
```

- *Type:* java.lang.String

Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#pending_approval GooglePrivilegedAccessManagerSettings#pending_approval}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications;

GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.builder()
//  .entitlementAssigned(java.lang.String)
//  .grantActivated(java.lang.String)
//  .grantActivationFailed(java.lang.String)
//  .grantDenied(java.lang.String)
//  .grantEnded(java.lang.String)
//  .grantExpired(java.lang.String)
//  .grantExternallyModified(java.lang.String)
//  .grantRevoked(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned">entitlementAssigned</a></code> | <code>java.lang.String</code> | Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated">grantActivated</a></code> | <code>java.lang.String</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed">grantActivationFailed</a></code> | <code>java.lang.String</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied">grantDenied</a></code> | <code>java.lang.String</code> | Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded">grantEnded</a></code> | <code>java.lang.String</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired">grantExpired</a></code> | <code>java.lang.String</code> | Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified">grantExternallyModified</a></code> | <code>java.lang.String</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked">grantRevoked</a></code> | <code>java.lang.String</code> | Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `entitlementAssigned`<sup>Optional</sup> <a name="entitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned"></a>

```java
public java.lang.String getEntitlementAssigned();
```

- *Type:* java.lang.String

Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#entitlement_assigned GooglePrivilegedAccessManagerSettings#entitlement_assigned}

---

##### `grantActivated`<sup>Optional</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated"></a>

```java
public java.lang.String getGrantActivated();
```

- *Type:* java.lang.String

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `grantActivationFailed`<sup>Optional</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed"></a>

```java
public java.lang.String getGrantActivationFailed();
```

- *Type:* java.lang.String

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `grantDenied`<sup>Optional</sup> <a name="grantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied"></a>

```java
public java.lang.String getGrantDenied();
```

- *Type:* java.lang.String

Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_denied GooglePrivilegedAccessManagerSettings#grant_denied}

---

##### `grantEnded`<sup>Optional</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded"></a>

```java
public java.lang.String getGrantEnded();
```

- *Type:* java.lang.String

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `grantExpired`<sup>Optional</sup> <a name="grantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired"></a>

```java
public java.lang.String getGrantExpired();
```

- *Type:* java.lang.String

Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_expired GooglePrivilegedAccessManagerSettings#grant_expired}

---

##### `grantExternallyModified`<sup>Optional</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified"></a>

```java
public java.lang.String getGrantExternallyModified();
```

- *Type:* java.lang.String

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

##### `grantRevoked`<sup>Optional</sup> <a name="grantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked"></a>

```java
public java.lang.String getGrantRevoked();
```

- *Type:* java.lang.String

Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_revoked GooglePrivilegedAccessManagerSettings#grant_revoked}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications;

GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications.builder()
    .build();
```


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings;

GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether service account is allowed to grant approvals. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether service account is allowed to grant approvals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#enabled GooglePrivilegedAccessManagerSettings#enabled}

---

### GooglePrivilegedAccessManagerSettingsTimeouts <a name="GooglePrivilegedAccessManagerSettingsTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsTimeouts;

GooglePrivilegedAccessManagerSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated">resetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed">resetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded">resetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified">resetGrantExternallyModified</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrantActivated` <a name="resetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated"></a>

```java
public void resetGrantActivated()
```

##### `resetGrantActivationFailed` <a name="resetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed"></a>

```java
public void resetGrantActivationFailed()
```

##### `resetGrantEnded` <a name="resetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded"></a>

```java
public void resetGrantEnded()
```

##### `resetGrantExternallyModified` <a name="resetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified"></a>

```java
public void resetGrantExternallyModified()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput">grantActivatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput">grantActivationFailedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput">grantEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput">grantExternallyModifiedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated">grantActivated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed">grantActivationFailed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded">grantEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified">grantExternallyModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grantActivatedInput`<sup>Optional</sup> <a name="grantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput"></a>

```java
public java.lang.String getGrantActivatedInput();
```

- *Type:* java.lang.String

---

##### `grantActivationFailedInput`<sup>Optional</sup> <a name="grantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput"></a>

```java
public java.lang.String getGrantActivationFailedInput();
```

- *Type:* java.lang.String

---

##### `grantEndedInput`<sup>Optional</sup> <a name="grantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput"></a>

```java
public java.lang.String getGrantEndedInput();
```

- *Type:* java.lang.String

---

##### `grantExternallyModifiedInput`<sup>Optional</sup> <a name="grantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```java
public java.lang.String getGrantExternallyModifiedInput();
```

- *Type:* java.lang.String

---

##### `grantActivated`<sup>Required</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated"></a>

```java
public java.lang.String getGrantActivated();
```

- *Type:* java.lang.String

---

##### `grantActivationFailed`<sup>Required</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed"></a>

```java
public java.lang.String getGrantActivationFailed();
```

- *Type:* java.lang.String

---

##### `grantEnded`<sup>Required</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded"></a>

```java
public java.lang.String getGrantEnded();
```

- *Type:* java.lang.String

---

##### `grantExternallyModified`<sup>Required</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified"></a>

```java
public java.lang.String getGrantExternallyModified();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval">resetPendingApproval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingApproval` <a name="resetPendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval"></a>

```java
public void resetPendingApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput">pendingApprovalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval">pendingApproval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pendingApprovalInput`<sup>Optional</sup> <a name="pendingApprovalInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput"></a>

```java
public java.lang.String getPendingApprovalInput();
```

- *Type:* java.lang.String

---

##### `pendingApproval`<sup>Required</sup> <a name="pendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval"></a>

```java
public java.lang.String getPendingApproval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications">putAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications">putApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications">putRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications">resetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications">resetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications">resetRequesterNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminNotifications` <a name="putAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications"></a>

```java
public void putAdminNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `putApproverNotifications` <a name="putApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications"></a>

```java
public void putApproverNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `putRequesterNotifications` <a name="putRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications"></a>

```java
public void putRequesterNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `resetAdminNotifications` <a name="resetAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications"></a>

```java
public void resetAdminNotifications()
```

##### `resetApproverNotifications` <a name="resetApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications"></a>

```java
public void resetApproverNotifications()
```

##### `resetRequesterNotifications` <a name="resetRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications"></a>

```java
public void resetRequesterNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications">requesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput">adminNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput">approverNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput">requesterNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference getAdminNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference getApproverNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a>

---

##### `requesterNotifications`<sup>Required</sup> <a name="requesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference getRequesterNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a>

---

##### `adminNotificationsInput`<sup>Optional</sup> <a name="adminNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications getAdminNotificationsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `approverNotificationsInput`<sup>Optional</sup> <a name="approverNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications getApproverNotificationsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `requesterNotificationsInput`<sup>Optional</sup> <a name="requesterNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications getRequesterNotificationsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned">resetEntitlementAssigned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated">resetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed">resetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied">resetGrantDenied</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded">resetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired">resetGrantExpired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified">resetGrantExternallyModified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked">resetGrantRevoked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntitlementAssigned` <a name="resetEntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned"></a>

```java
public void resetEntitlementAssigned()
```

##### `resetGrantActivated` <a name="resetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated"></a>

```java
public void resetGrantActivated()
```

##### `resetGrantActivationFailed` <a name="resetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed"></a>

```java
public void resetGrantActivationFailed()
```

##### `resetGrantDenied` <a name="resetGrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied"></a>

```java
public void resetGrantDenied()
```

##### `resetGrantEnded` <a name="resetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded"></a>

```java
public void resetGrantEnded()
```

##### `resetGrantExpired` <a name="resetGrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired"></a>

```java
public void resetGrantExpired()
```

##### `resetGrantExternallyModified` <a name="resetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified"></a>

```java
public void resetGrantExternallyModified()
```

##### `resetGrantRevoked` <a name="resetGrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked"></a>

```java
public void resetGrantRevoked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput">entitlementAssignedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput">grantActivatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput">grantActivationFailedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput">grantDeniedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput">grantEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput">grantExpiredInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput">grantExternallyModifiedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput">grantRevokedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned">entitlementAssigned</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated">grantActivated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed">grantActivationFailed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied">grantDenied</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded">grantEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired">grantExpired</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified">grantExternallyModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked">grantRevoked</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entitlementAssignedInput`<sup>Optional</sup> <a name="entitlementAssignedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput"></a>

```java
public java.lang.String getEntitlementAssignedInput();
```

- *Type:* java.lang.String

---

##### `grantActivatedInput`<sup>Optional</sup> <a name="grantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput"></a>

```java
public java.lang.String getGrantActivatedInput();
```

- *Type:* java.lang.String

---

##### `grantActivationFailedInput`<sup>Optional</sup> <a name="grantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput"></a>

```java
public java.lang.String getGrantActivationFailedInput();
```

- *Type:* java.lang.String

---

##### `grantDeniedInput`<sup>Optional</sup> <a name="grantDeniedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput"></a>

```java
public java.lang.String getGrantDeniedInput();
```

- *Type:* java.lang.String

---

##### `grantEndedInput`<sup>Optional</sup> <a name="grantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput"></a>

```java
public java.lang.String getGrantEndedInput();
```

- *Type:* java.lang.String

---

##### `grantExpiredInput`<sup>Optional</sup> <a name="grantExpiredInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput"></a>

```java
public java.lang.String getGrantExpiredInput();
```

- *Type:* java.lang.String

---

##### `grantExternallyModifiedInput`<sup>Optional</sup> <a name="grantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```java
public java.lang.String getGrantExternallyModifiedInput();
```

- *Type:* java.lang.String

---

##### `grantRevokedInput`<sup>Optional</sup> <a name="grantRevokedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput"></a>

```java
public java.lang.String getGrantRevokedInput();
```

- *Type:* java.lang.String

---

##### `entitlementAssigned`<sup>Required</sup> <a name="entitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned"></a>

```java
public java.lang.String getEntitlementAssigned();
```

- *Type:* java.lang.String

---

##### `grantActivated`<sup>Required</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated"></a>

```java
public java.lang.String getGrantActivated();
```

- *Type:* java.lang.String

---

##### `grantActivationFailed`<sup>Required</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed"></a>

```java
public java.lang.String getGrantActivationFailed();
```

- *Type:* java.lang.String

---

##### `grantDenied`<sup>Required</sup> <a name="grantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied"></a>

```java
public java.lang.String getGrantDenied();
```

- *Type:* java.lang.String

---

##### `grantEnded`<sup>Required</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded"></a>

```java
public java.lang.String getGrantEnded();
```

- *Type:* java.lang.String

---

##### `grantExpired`<sup>Required</sup> <a name="grantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired"></a>

```java
public java.lang.String getGrantExpired();
```

- *Type:* java.lang.String

---

##### `grantExternallyModified`<sup>Required</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified"></a>

```java
public java.lang.String getGrantExternallyModified();
```

- *Type:* java.lang.String

---

##### `grantRevoked`<sup>Required</sup> <a name="grantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked"></a>

```java
public java.lang.String getGrantRevoked();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference;

new GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior">putCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications">putDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior">resetCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications">resetDisableAllNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomNotificationBehavior` <a name="putCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior"></a>

```java
public void putCustomNotificationBehavior(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `putDisableAllNotifications` <a name="putDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications"></a>

```java
public void putDisableAllNotifications(GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `resetCustomNotificationBehavior` <a name="resetCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior"></a>

```java
public void resetCustomNotificationBehavior()
```

##### `resetDisableAllNotifications` <a name="resetDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications"></a>

```java
public void resetDisableAllNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior">customNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications">disableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput">customNotificationBehaviorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput">disableAllNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customNotificationBehavior`<sup>Required</sup> <a name="customNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference getCustomNotificationBehavior();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a>

---

##### `disableAllNotifications`<sup>Required</sup> <a name="disableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference getDisableAllNotifications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a>

---

##### `customNotificationBehaviorInput`<sup>Optional</sup> <a name="customNotificationBehaviorInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior getCustomNotificationBehaviorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `disableAllNotificationsInput`<sup>Optional</sup> <a name="disableAllNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications getDisableAllNotificationsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsEmailNotificationSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference;

new GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---


### GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_privileged_access_manager_settings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference;

new GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GooglePrivilegedAccessManagerSettingsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---



