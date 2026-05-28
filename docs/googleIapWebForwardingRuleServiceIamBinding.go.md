# `googleIapWebForwardingRuleServiceIamBinding` Submodule <a name="`googleIapWebForwardingRuleServiceIamBinding` Submodule" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebForwardingRuleServiceIamBinding <a name="GoogleIapWebForwardingRuleServiceIamBinding" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding google_iap_web_forwarding_rule_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

googleiapwebforwardingruleserviceiambinding.NewGoogleIapWebForwardingRuleServiceIamBinding(scope Construct, id *string, config GoogleIapWebForwardingRuleServiceIamBindingConfig) GoogleIapWebForwardingRuleServiceIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig">GoogleIapWebForwardingRuleServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig">GoogleIapWebForwardingRuleServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleIapWebForwardingRuleServiceIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

googleiapwebforwardingruleserviceiambinding.GoogleIapWebForwardingRuleServiceIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

googleiapwebforwardingruleserviceiambinding.GoogleIapWebForwardingRuleServiceIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

googleiapwebforwardingruleserviceiambinding.GoogleIapWebForwardingRuleServiceIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

googleiapwebforwardingruleserviceiambinding.GoogleIapWebForwardingRuleServiceIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleIapWebForwardingRuleServiceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIapWebForwardingRuleServiceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIapWebForwardingRuleServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebForwardingRuleServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference">GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput">ForwardingRuleServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName">ForwardingRuleServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.condition"></a>

```go
func Condition() GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference">GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleIapWebForwardingRuleServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

---

##### `ForwardingRuleServiceNameInput`<sup>Optional</sup> <a name="ForwardingRuleServiceNameInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceNameInput"></a>

```go
func ForwardingRuleServiceNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ForwardingRuleServiceName`<sup>Required</sup> <a name="ForwardingRuleServiceName" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.forwardingRuleServiceName"></a>

```go
func ForwardingRuleServiceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebForwardingRuleServiceIamBindingCondition <a name="GoogleIapWebForwardingRuleServiceIamBindingCondition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

&googleiapwebforwardingruleserviceiambinding.GoogleIapWebForwardingRuleServiceIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#expression GoogleIapWebForwardingRuleServiceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#title GoogleIapWebForwardingRuleServiceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#description GoogleIapWebForwardingRuleServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#expression GoogleIapWebForwardingRuleServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#title GoogleIapWebForwardingRuleServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#description GoogleIapWebForwardingRuleServiceIamBinding#description}.

---

### GoogleIapWebForwardingRuleServiceIamBindingConfig <a name="GoogleIapWebForwardingRuleServiceIamBindingConfig" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

&googleiapwebforwardingruleserviceiambinding.GoogleIapWebForwardingRuleServiceIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ForwardingRuleServiceName: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName">ForwardingRuleServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#members GoogleIapWebForwardingRuleServiceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#role GoogleIapWebForwardingRuleServiceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#id GoogleIapWebForwardingRuleServiceIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#project GoogleIapWebForwardingRuleServiceIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ForwardingRuleServiceName`<sup>Required</sup> <a name="ForwardingRuleServiceName" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.forwardingRuleServiceName"></a>

```go
ForwardingRuleServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#forwarding_rule_service_name GoogleIapWebForwardingRuleServiceIamBinding#forwarding_rule_service_name}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#members GoogleIapWebForwardingRuleServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#role GoogleIapWebForwardingRuleServiceIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.condition"></a>

```go
Condition GoogleIapWebForwardingRuleServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#condition GoogleIapWebForwardingRuleServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#id GoogleIapWebForwardingRuleServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_iap_web_forwarding_rule_service_iam_binding#project GoogleIapWebForwardingRuleServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference <a name="GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiapwebforwardingruleserviceiambinding"

googleiapwebforwardingruleserviceiambinding.NewGoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIapWebForwardingRuleServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebForwardingRuleServiceIamBinding.GoogleIapWebForwardingRuleServiceIamBindingCondition">GoogleIapWebForwardingRuleServiceIamBindingCondition</a>

---



