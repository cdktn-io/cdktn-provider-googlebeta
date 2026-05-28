# `googleNetworkSecurityAuthorizationPolicy` Submodule <a name="`googleNetworkSecurityAuthorizationPolicy` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAuthorizationPolicy <a name="GoogleNetworkSecurityAuthorizationPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy google_network_security_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicy;

GoogleNetworkSecurityAuthorizationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .rules(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRules>)
//  .timeouts(GoogleNetworkSecurityAuthorizationPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The action to take when a rule match is found. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the AuthorizationPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AuthorizationPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the authorization policy. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The action to take when a rule match is found.

Possible values are "ALLOW" or "DENY". Possible values: ["ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#action GoogleNetworkSecurityAuthorizationPolicy#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the AuthorizationPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#name GoogleNetworkSecurityAuthorizationPolicy#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#deletion_policy GoogleNetworkSecurityAuthorizationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#description GoogleNetworkSecurityAuthorizationPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AuthorizationPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#labels GoogleNetworkSecurityAuthorizationPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the authorization policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#location GoogleNetworkSecurityAuthorizationPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#rules GoogleNetworkSecurityAuthorizationPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#timeouts GoogleNetworkSecurityAuthorizationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityAuthorizationPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules"></a>

```java
public void resetRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicy;

GoogleNetworkSecurityAuthorizationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicy;

GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicy;

GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicy;

GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityAuthorizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkSecurityAuthorizationPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAuthorizationPolicyConfig <a name="GoogleNetworkSecurityAuthorizationPolicyConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyConfig;

GoogleNetworkSecurityAuthorizationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .rules(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRules>)
//  .timeouts(GoogleNetworkSecurityAuthorizationPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action">action</a></code> | <code>java.lang.String</code> | The action to take when a rule match is found. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the AuthorizationPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the AuthorizationPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the authorization policy. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action to take when a rule match is found.

Possible values are "ALLOW" or "DENY". Possible values: ["ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#action GoogleNetworkSecurityAuthorizationPolicy#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the AuthorizationPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#name GoogleNetworkSecurityAuthorizationPolicy#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#deletion_policy GoogleNetworkSecurityAuthorizationPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#description GoogleNetworkSecurityAuthorizationPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the AuthorizationPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#labels GoogleNetworkSecurityAuthorizationPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the authorization policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#location GoogleNetworkSecurityAuthorizationPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#rules GoogleNetworkSecurityAuthorizationPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#timeouts GoogleNetworkSecurityAuthorizationPolicy#timeouts}

---

### GoogleNetworkSecurityAuthorizationPolicyRules <a name="GoogleNetworkSecurityAuthorizationPolicyRules" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRules;

GoogleNetworkSecurityAuthorizationPolicyRules.builder()
//  .destinations(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesDestinations>)
//  .sources(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>></code> | destinations block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>></code> | sources block. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#destinations GoogleNetworkSecurityAuthorizationPolicy#destinations}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#sources GoogleNetworkSecurityAuthorizationPolicy#sources}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinations <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinations" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations;

GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.builder()
    .hosts(java.util.List<java.lang.String>)
    .methods(java.util.List<java.lang.String>)
    .ports(java.util.List<java.lang.Number>)
//  .httpHeaderMatch(GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | List of host names to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | A list of HTTP methods to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | List of destination ports to match. At least one port should match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch">httpHeaderMatch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | http_header_match block. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

List of host names to match.

Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#hosts GoogleNetworkSecurityAuthorizationPolicy#hosts}

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

A list of HTTP methods to match.

At least one method should match. Should not be set for gRPC services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#methods GoogleNetworkSecurityAuthorizationPolicy#methods}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

List of destination ports to match. At least one port should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#ports GoogleNetworkSecurityAuthorizationPolicy#ports}

---

##### `httpHeaderMatch`<sup>Optional</sup> <a name="httpHeaderMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch getHttpHeaderMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

http_header_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#http_header_match GoogleNetworkSecurityAuthorizationPolicy#http_header_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch;

GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.builder()
    .headerName(java.lang.String)
    .regexMatch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The name of the HTTP header to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | The value of the header must match the regular expression specified in regexMatch. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The name of the HTTP header to match.

For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#header_name GoogleNetworkSecurityAuthorizationPolicy#header_name}

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

The value of the header must match the regular expression specified in regexMatch.

For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#regex_match GoogleNetworkSecurityAuthorizationPolicy#regex_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesSources <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSources" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesSources;

GoogleNetworkSecurityAuthorizationPolicyRulesSources.builder()
//  .ipBlocks(java.util.List<java.lang.String>)
//  .principals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks">ipBlocks</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR ranges to match based on source IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | List of peer identities to match for authorization. |

---

##### `ipBlocks`<sup>Optional</sup> <a name="ipBlocks" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks"></a>

```java
public java.util.List<java.lang.String> getIpBlocks();
```

- *Type:* java.util.List<java.lang.String>

List of CIDR ranges to match based on source IP address.

At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.
The IP addresses of any load balancers or proxies should be considered untrusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#ip_blocks GoogleNetworkSecurityAuthorizationPolicy#ip_blocks}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

List of peer identities to match for authorization.

At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "* /service-account") or a presence match "*".
Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#principals GoogleNetworkSecurityAuthorizationPolicy#principals}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleNetworkSecurityAuthorizationPolicyTimeouts <a name="GoogleNetworkSecurityAuthorizationPolicyTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyTimeouts;

GoogleNetworkSecurityAuthorizationPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput"></a>

```java
public java.lang.String getRegexMatchInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch">putHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch">resetHttpHeaderMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaderMatch` <a name="putHttpHeaderMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch"></a>

```java
public void putHttpHeaderMatch(GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `resetHttpHeaderMatch` <a name="resetHttpHeaderMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch"></a>

```java
public void resetHttpHeaderMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch">httpHeaderMatch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput">httpHeaderMatchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput">methodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaderMatch`<sup>Required</sup> <a name="httpHeaderMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference getHttpHeaderMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a>

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpHeaderMatchInput`<sup>Optional</sup> <a name="httpHeaderMatchInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch getHttpHeaderMatchInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput"></a>

```java
public java.util.List<java.lang.String> getMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityAuthorizationPolicyRulesDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesList" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesList;

new GoogleNetworkSecurityAuthorizationPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference;

new GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityAuthorizationPolicyRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList;

new GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get"></a>

```java
public GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkSecurityAuthorizationPolicyRulesSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference;

new GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks">resetIpBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals">resetPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpBlocks` <a name="resetIpBlocks" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks"></a>

```java
public void resetIpBlocks()
```

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals"></a>

```java
public void resetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput">ipBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks">ipBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipBlocksInput`<sup>Optional</sup> <a name="ipBlocksInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput"></a>

```java
public java.util.List<java.lang.String> getIpBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipBlocks`<sup>Required</sup> <a name="ipBlocks" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks"></a>

```java
public java.util.List<java.lang.String> getIpBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityAuthorizationPolicyRulesSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>

---


### GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_authorization_policy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference;

new GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityAuthorizationPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

---



