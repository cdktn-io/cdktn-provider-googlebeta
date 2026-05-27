# `googleBeyondcorpSecurityGatewayApplicationIamMember` Submodule <a name="`googleBeyondcorpSecurityGatewayApplicationIamMember` Submodule" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamMember <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMember" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member google_beyondcorp_security_gateway_application_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMember;

GoogleBeyondcorpSecurityGatewayApplicationIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .condition(GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#application_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#application_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#member GoogleBeyondcorpSecurityGatewayApplicationIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#role GoogleBeyondcorpSecurityGatewayApplicationIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#id GoogleBeyondcorpSecurityGatewayApplicationIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#project GoogleBeyondcorpSecurityGatewayApplicationIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#application_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#application_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#member GoogleBeyondcorpSecurityGatewayApplicationIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#role GoogleBeyondcorpSecurityGatewayApplicationIamMember#role}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#condition GoogleBeyondcorpSecurityGatewayApplicationIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#id GoogleBeyondcorpSecurityGatewayApplicationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#project GoogleBeyondcorpSecurityGatewayApplicationIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.putCondition"></a>

```java
public void putCondition(GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMember;

GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMember;

GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMember;

GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMember;

GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplicationIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplicationIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBeyondcorpSecurityGatewayApplicationIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplicationIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference">GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.condition"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference">GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.conditionInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition;

GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#expression GoogleBeyondcorpSecurityGatewayApplicationIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#title GoogleBeyondcorpSecurityGatewayApplicationIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#description GoogleBeyondcorpSecurityGatewayApplicationIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#expression GoogleBeyondcorpSecurityGatewayApplicationIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#title GoogleBeyondcorpSecurityGatewayApplicationIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#description GoogleBeyondcorpSecurityGatewayApplicationIamMember#description}.

---

### GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig;

GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .condition(GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#application_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#application_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#member GoogleBeyondcorpSecurityGatewayApplicationIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#role GoogleBeyondcorpSecurityGatewayApplicationIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#id GoogleBeyondcorpSecurityGatewayApplicationIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#project GoogleBeyondcorpSecurityGatewayApplicationIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#application_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#application_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#member GoogleBeyondcorpSecurityGatewayApplicationIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#role GoogleBeyondcorpSecurityGatewayApplicationIamMember#role}.

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#security_gateway_id GoogleBeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.condition"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#condition GoogleBeyondcorpSecurityGatewayApplicationIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#id GoogleBeyondcorpSecurityGatewayApplicationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application_iam_member#project GoogleBeyondcorpSecurityGatewayApplicationIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application_iam_member.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplicationIamMember.GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition">GoogleBeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---



