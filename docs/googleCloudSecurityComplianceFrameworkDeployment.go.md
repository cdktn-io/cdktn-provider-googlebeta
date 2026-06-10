# `googleCloudSecurityComplianceFrameworkDeployment` Submodule <a name="`googleCloudSecurityComplianceFrameworkDeployment` Submodule" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudSecurityComplianceFrameworkDeployment <a name="GoogleCloudSecurityComplianceFrameworkDeployment" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment google_cloud_security_compliance_framework_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeployment(scope Construct, id *string, config GoogleCloudSecurityComplianceFrameworkDeploymentConfig) GoogleCloudSecurityComplianceFrameworkDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig">GoogleCloudSecurityComplianceFrameworkDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig">GoogleCloudSecurityComplianceFrameworkDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata">PutCloudControlMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework">PutFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig">PutTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudControlMetadata` <a name="PutCloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata"></a>

```go
func PutCloudControlMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putCloudControlMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFramework` <a name="PutFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework"></a>

```go
func PutFramework(value GoogleCloudSecurityComplianceFrameworkDeploymentFramework)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putFramework.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `PutTargetResourceConfig` <a name="PutTargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig"></a>

```go
func PutTargetResourceConfig(value GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTargetResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCloudSecurityComplianceFrameworkDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudSecurityComplianceFrameworkDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudSecurityComplianceFrameworkDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudSecurityComplianceFrameworkDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences">CloudControlDeploymentReferences</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata">CloudControlMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.computedTargetResource">ComputedTargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deploymentState">DeploymentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.framework">Framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig">TargetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName">TargetResourceDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput">CloudControlMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput">FrameworkDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkInput">FrameworkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput">TargetResourceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId">FrameworkDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudControlDeploymentReferences`<sup>Required</sup> <a name="CloudControlDeploymentReferences" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlDeploymentReferences"></a>

```go
func CloudControlDeploymentReferences() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList</a>

---

##### `CloudControlMetadata`<sup>Required</sup> <a name="CloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadata"></a>

```go
func CloudControlMetadata() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList</a>

---

##### `ComputedTargetResource`<sup>Required</sup> <a name="ComputedTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.computedTargetResource"></a>

```go
func ComputedTargetResource() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeploymentState`<sup>Required</sup> <a name="DeploymentState" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deploymentState"></a>

```go
func DeploymentState() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.framework"></a>

```go
func Framework() GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetResourceConfig`<sup>Required</sup> <a name="TargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfig"></a>

```go
func TargetResourceConfig() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference</a>

---

##### `TargetResourceDisplayName`<sup>Required</sup> <a name="TargetResourceDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceDisplayName"></a>

```go
func TargetResourceDisplayName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeouts"></a>

```go
func Timeouts() GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CloudControlMetadataInput`<sup>Optional</sup> <a name="CloudControlMetadataInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.cloudControlMetadataInput"></a>

```go
func CloudControlMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FrameworkDeploymentIdInput`<sup>Optional</sup> <a name="FrameworkDeploymentIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentIdInput"></a>

```go
func FrameworkDeploymentIdInput() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkInput"></a>

```go
func FrameworkInput() GoogleCloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TargetResourceConfigInput`<sup>Optional</sup> <a name="TargetResourceConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.targetResourceConfigInput"></a>

```go
func TargetResourceConfigInput() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FrameworkDeploymentId`<sup>Required</sup> <a name="FrameworkDeploymentId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.frameworkDeploymentId"></a>

```go
func FrameworkDeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences {

}
```


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata {
	CloudControlDetails: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails,
	EnforcementMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails">CloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT. |

---

##### `CloudControlDetails`<sup>Required</sup> <a name="CloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.cloudControlDetails"></a>

```go
CloudControlDetails GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_details GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_details}

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadata.property.enforcementMode"></a>

```go
EnforcementMode *string
```

- *Type:* *string

Enforcement mode for the framework deployment. Possible values: PREVENTIVE DETECTIVE AUDIT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#enforcement_mode GoogleCloudSecurityComplianceFrameworkDeployment#enforcement_mode}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails {
	MajorRevisionId: *string,
	Name: *string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name">Name</a></code> | <code>*string</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.majorRevisionId"></a>

```go
MajorRevisionId *string
```

- *Type:* *string

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/ cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameters GoogleCloudSecurityComplianceFrameworkDeployment#parameters}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters {
	Name: *string,
	ParameterValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name">Name</a></code> | <code>*string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParameters.property.parameterValue"></a>

```go
ParameterValue GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue {
	BoolValue: interface{},
	NumberValue: *f64,
	OneofValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue,
	StringListValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue">NumberValue</a></code> | <code>*f64</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue">OneofValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Represents a string value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```go
NumberValue *f64
```

- *Type:* *f64

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `OneofValue`<sup>Optional</sup> <a name="OneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```go
OneofValue GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#oneof_value GoogleCloudSecurityComplianceFrameworkDeployment#oneof_value}

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```go
StringListValue GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue {
	Name: *string,
	ParameterValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name">Name</a></code> | <code>*string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#name GoogleCloudSecurityComplianceFrameworkDeployment#name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```go
ParameterValue GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#parameter_value GoogleCloudSecurityComplianceFrameworkDeployment#parameter_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue {
	BoolValue: interface{},
	NumberValue: *f64,
	StringListValue: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">NumberValue</a></code> | <code>*f64</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Represents a string value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#bool_value GoogleCloudSecurityComplianceFrameworkDeployment#bool_value}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```go
NumberValue *f64
```

- *Type:* *f64

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#number_value GoogleCloudSecurityComplianceFrameworkDeployment#number_value}

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```go
StringListValue GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_list_value GoogleCloudSecurityComplianceFrameworkDeployment#string_list_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#string_value GoogleCloudSecurityComplianceFrameworkDeployment#string_value}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">Values</a></code> | <code>*[]*string</code> | The strings in the list. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values">Values</a></code> | <code>*[]*string</code> | The strings in the list. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#values GoogleCloudSecurityComplianceFrameworkDeployment#values}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudControlMetadata: interface{},
	Framework: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework,
	FrameworkDeploymentId: *string,
	Location: *string,
	Organization: *string,
	TargetResourceConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata">CloudControlMetadata</a></code> | <code>interface{}</code> | cloud_control_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.framework">Framework</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | framework block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId">FrameworkDeploymentId</a></code> | <code>*string</code> | User provided identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.organization">Organization</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig">TargetResourceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | target_resource_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.description">Description</a></code> | <code>*string</code> | User provided description of the Framework deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudControlMetadata`<sup>Required</sup> <a name="CloudControlMetadata" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.cloudControlMetadata"></a>

```go
CloudControlMetadata interface{}
```

- *Type:* interface{}

cloud_control_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#cloud_control_metadata GoogleCloudSecurityComplianceFrameworkDeployment#cloud_control_metadata}

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.framework"></a>

```go
Framework GoogleCloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

framework block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `FrameworkDeploymentId`<sup>Required</sup> <a name="FrameworkDeploymentId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.frameworkDeploymentId"></a>

```go
FrameworkDeploymentId *string
```

- *Type:* *string

User provided identifier.

It should be unique in scope of a parent.
This is optional and if not provided, a random UUID will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework_deployment_id GoogleCloudSecurityComplianceFrameworkDeployment#framework_deployment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#location GoogleCloudSecurityComplianceFrameworkDeployment#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#organization GoogleCloudSecurityComplianceFrameworkDeployment#organization}

---

##### `TargetResourceConfig`<sup>Required</sup> <a name="TargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.targetResourceConfig"></a>

```go
TargetResourceConfig GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

target_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#deletion_policy GoogleCloudSecurityComplianceFrameworkDeployment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User provided description of the Framework deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#description GoogleCloudSecurityComplianceFrameworkDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#id GoogleCloudSecurityComplianceFrameworkDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts">GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#timeouts GoogleCloudSecurityComplianceFrameworkDeployment#timeouts}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentFramework <a name="GoogleCloudSecurityComplianceFrameworkDeploymentFramework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework {
	Framework: *string,
	MajorRevisionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.framework">Framework</a></code> | <code>*string</code> | In the format: organizations/{org}/locations/{location}/frameworks/{framework}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | Major revision id of the framework. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

In the format: organizations/{org}/locations/{location}/frameworks/{framework}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#framework GoogleCloudSecurityComplianceFrameworkDeployment#framework}

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework.property.majorRevisionId"></a>

```go
MajorRevisionId *string
```

- *Type:* *string

Major revision id of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#major_revision_id GoogleCloudSecurityComplianceFrameworkDeployment#major_revision_id}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig {
	ExistingTargetResource: *string,
	TargetResourceCreationConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource">ExistingTargetResource</a></code> | <code>*string</code> | CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig">TargetResourceCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | target_resource_creation_config block. |

---

##### `ExistingTargetResource`<sup>Optional</sup> <a name="ExistingTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.existingTargetResource"></a>

```go
ExistingTargetResource *string
```

- *Type:* *string

CRM node in format organizations/{organization}, folders/{folder}, or projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#existing_target_resource GoogleCloudSecurityComplianceFrameworkDeployment#existing_target_resource}

---

##### `TargetResourceCreationConfig`<sup>Optional</sup> <a name="TargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig.property.targetResourceCreationConfig"></a>

```go
TargetResourceCreationConfig GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

target_resource_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#target_resource_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#target_resource_creation_config}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig {
	FolderCreationConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig,
	ProjectCreationConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig">FolderCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | folder_creation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig">ProjectCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | project_creation_config block. |

---

##### `FolderCreationConfig`<sup>Optional</sup> <a name="FolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.folderCreationConfig"></a>

```go
FolderCreationConfig GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

folder_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#folder_creation_config}

---

##### `ProjectCreationConfig`<sup>Optional</sup> <a name="ProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig.property.projectCreationConfig"></a>

```go
ProjectCreationConfig GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

project_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_creation_config GoogleCloudSecurityComplianceFrameworkDeployment#project_creation_config}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig {
	FolderDisplayName: *string,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName">FolderDisplayName</a></code> | <code>*string</code> | Display name of the folder to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}. |

---

##### `FolderDisplayName`<sup>Required</sup> <a name="FolderDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.folderDisplayName"></a>

```go
FolderDisplayName *string
```

- *Type:* *string

Display name of the folder to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#folder_display_name GoogleCloudSecurityComplianceFrameworkDeployment#folder_display_name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the folder to be created. It can be an organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig {
	BillingAccountId: *string,
	Parent: *string,
	ProjectDisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId">BillingAccountId</a></code> | <code>*string</code> | Billing account id to be used for the project. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent">Parent</a></code> | <code>*string</code> | organizations/{org} or folders/{folder}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName">ProjectDisplayName</a></code> | <code>*string</code> | Display name of the project to be created. |

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.billingAccountId"></a>

```go
BillingAccountId *string
```

- *Type:* *string

Billing account id to be used for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#billing_account_id GoogleCloudSecurityComplianceFrameworkDeployment#billing_account_id}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

organizations/{org} or folders/{folder}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#parent GoogleCloudSecurityComplianceFrameworkDeployment#parent}

---

##### `ProjectDisplayName`<sup>Required</sup> <a name="ProjectDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig.property.projectDisplayName"></a>

```go
ProjectDisplayName *string
```

- *Type:* *string

Display name of the project to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#project_display_name GoogleCloudSecurityComplianceFrameworkDeployment#project_display_name}

---

### GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

&googlecloudsecuritycomplianceframeworkdeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#create GoogleCloudSecurityComplianceFrameworkDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_cloud_security_compliance_framework_deployment#delete GoogleCloudSecurityComplianceFrameworkDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get"></a>

```go
func Get(index *f64) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment">CloudControlDeployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudControlDeployment`<sup>Required</sup> <a name="CloudControlDeployment" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.cloudControlDeployment"></a>

```go
func CloudControlDeployment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlDeploymentReferences</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput">MajorRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parameters"></a>

```go
func Parameters() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList</a>

---

##### `MajorRevisionIdInput`<sup>Optional</sup> <a name="MajorRevisionIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```go
func MajorRevisionIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```go
func MajorRevisionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get"></a>

```go
func Get(index *f64) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue">PutParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterValue` <a name="PutParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```go
func PutParameterValue(value GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">PutParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterValue` <a name="PutParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```go
func PutParameterValue(value GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```go
func ParameterValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">PutStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStringListValue` <a name="PutStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```go
func PutStringListValue(value GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```go
func ResetNumberValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```go
func NumberValueInput() *f64
```

- *Type:* *f64

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">PutOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">PutStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">ResetOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOneofValue` <a name="PutOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```go
func PutOneofValue(value GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `PutStringListValue` <a name="PutStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```go
func PutStringListValue(value GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```go
func ResetNumberValue()
```

##### `ResetOneofValue` <a name="ResetOneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```go
func ResetOneofValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">OneofValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">StringListValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">OneofValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OneofValue`<sup>Required</sup> <a name="OneofValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```go
func OneofValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```go
func NumberValueInput() *f64
```

- *Type:* *f64

---

##### `OneofValueInput`<sup>Optional</sup> <a name="OneofValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```go
func OneofValueInput() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsParametersParameterValueStringListValue</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get"></a>

```go
func Get(index *f64) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails">PutCloudControlDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudControlDetails` <a name="PutCloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails"></a>

```go
func PutCloudControlDetails(value GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.putCloudControlDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails">CloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput">CloudControlDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudControlDetails`<sup>Required</sup> <a name="CloudControlDetails" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetails"></a>

```go
func CloudControlDetails() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetailsOutputReference</a>

---

##### `CloudControlDetailsInput`<sup>Optional</sup> <a name="CloudControlDetailsInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.cloudControlDetailsInput"></a>

```go
func CloudControlDetailsInput() GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails">GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataCloudControlDetails</a>

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementModeInput"></a>

```go
func EnforcementModeInput() *string
```

- *Type:* *string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.enforcementMode"></a>

```go
func EnforcementMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentCloudControlMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput">MajorRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId">MajorRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `MajorRevisionIdInput`<sup>Optional</sup> <a name="MajorRevisionIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionIdInput"></a>

```go
func MajorRevisionIdInput() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `MajorRevisionId`<sup>Required</sup> <a name="MajorRevisionId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.majorRevisionId"></a>

```go
func MajorRevisionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFrameworkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentFramework
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentFramework">GoogleCloudSecurityComplianceFrameworkDeploymentFramework</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig">PutTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource">ResetExistingTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig">ResetTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetResourceCreationConfig` <a name="PutTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig"></a>

```go
func PutTargetResourceCreationConfig(value GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.putTargetResourceCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `ResetExistingTargetResource` <a name="ResetExistingTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetExistingTargetResource"></a>

```go
func ResetExistingTargetResource()
```

##### `ResetTargetResourceCreationConfig` <a name="ResetTargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.resetTargetResourceCreationConfig"></a>

```go
func ResetTargetResourceCreationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig">TargetResourceCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput">ExistingTargetResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput">TargetResourceCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource">ExistingTargetResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetResourceCreationConfig`<sup>Required</sup> <a name="TargetResourceCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfig"></a>

```go
func TargetResourceCreationConfig() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference</a>

---

##### `ExistingTargetResourceInput`<sup>Optional</sup> <a name="ExistingTargetResourceInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResourceInput"></a>

```go
func ExistingTargetResourceInput() *string
```

- *Type:* *string

---

##### `TargetResourceCreationConfigInput`<sup>Optional</sup> <a name="TargetResourceCreationConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.targetResourceCreationConfigInput"></a>

```go
func TargetResourceCreationConfigInput() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---

##### `ExistingTargetResource`<sup>Required</sup> <a name="ExistingTargetResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.existingTargetResource"></a>

```go
func ExistingTargetResource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput">FolderDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName">FolderDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FolderDisplayNameInput`<sup>Optional</sup> <a name="FolderDisplayNameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayNameInput"></a>

```go
func FolderDisplayNameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `FolderDisplayName`<sup>Required</sup> <a name="FolderDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.folderDisplayName"></a>

```go
func FolderDisplayName() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig">PutFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig">PutProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig">ResetFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig">ResetProjectCreationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFolderCreationConfig` <a name="PutFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig"></a>

```go
func PutFolderCreationConfig(value GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putFolderCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `PutProjectCreationConfig` <a name="PutProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig"></a>

```go
func PutProjectCreationConfig(value GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.putProjectCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `ResetFolderCreationConfig` <a name="ResetFolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetFolderCreationConfig"></a>

```go
func ResetFolderCreationConfig()
```

##### `ResetProjectCreationConfig` <a name="ResetProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.resetProjectCreationConfig"></a>

```go
func ResetProjectCreationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig">FolderCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig">ProjectCreationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput">FolderCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput">ProjectCreationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FolderCreationConfig`<sup>Required</sup> <a name="FolderCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfig"></a>

```go
func FolderCreationConfig() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfigOutputReference</a>

---

##### `ProjectCreationConfig`<sup>Required</sup> <a name="ProjectCreationConfig" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfig"></a>

```go
func ProjectCreationConfig() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference</a>

---

##### `FolderCreationConfigInput`<sup>Optional</sup> <a name="FolderCreationConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.folderCreationConfigInput"></a>

```go
func FolderCreationConfigInput() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigFolderCreationConfig</a>

---

##### `ProjectCreationConfigInput`<sup>Optional</sup> <a name="ProjectCreationConfigInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.projectCreationConfigInput"></a>

```go
func ProjectCreationConfigInput() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput">BillingAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput">ProjectDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId">BillingAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName">ProjectDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingAccountIdInput`<sup>Optional</sup> <a name="BillingAccountIdInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountIdInput"></a>

```go
func BillingAccountIdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProjectDisplayNameInput`<sup>Optional</sup> <a name="ProjectDisplayNameInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayNameInput"></a>

```go
func ProjectDisplayNameInput() *string
```

- *Type:* *string

---

##### `BillingAccountId`<sup>Required</sup> <a name="BillingAccountId" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.billingAccountId"></a>

```go
func BillingAccountId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ProjectDisplayName`<sup>Required</sup> <a name="ProjectDisplayName" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.projectDisplayName"></a>

```go
func ProjectDisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig">GoogleCloudSecurityComplianceFrameworkDeploymentTargetResourceConfigTargetResourceCreationConfigProjectCreationConfig</a>

---


### GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference <a name="GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecloudsecuritycomplianceframeworkdeployment"

googlecloudsecuritycomplianceframeworkdeployment.NewGoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudSecurityComplianceFrameworkDeployment.GoogleCloudSecurityComplianceFrameworkDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



