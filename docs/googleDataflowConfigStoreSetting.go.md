# `googleDataflowConfigStoreSetting` Submodule <a name="`googleDataflowConfigStoreSetting` Submodule" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowConfigStoreSetting <a name="GoogleDataflowConfigStoreSetting" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting google_dataflow_config_store_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.NewGoogleDataflowConfigStoreSetting(scope Construct, id *string, config GoogleDataflowConfigStoreSettingConfig) GoogleDataflowConfigStoreSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig">GoogleDataflowConfigStoreSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig">GoogleDataflowConfigStoreSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataflowConfigStoreSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue"></a>

```go
func PutValue(value GoogleDataflowConfigStoreSettingValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.GoogleDataflowConfigStoreSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.GoogleDataflowConfigStoreSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.GoogleDataflowConfigStoreSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.GoogleDataflowConfigStoreSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDataflowConfigStoreSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataflowConfigStoreSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataflowConfigStoreSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataflowConfigStoreSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference">GoogleDataflowConfigStoreSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.value">Value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference">GoogleDataflowConfigStoreSettingValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingIdInput">ConfigStoreSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingId">ConfigStoreSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeouts"></a>

```go
func Timeouts() GoogleDataflowConfigStoreSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference">GoogleDataflowConfigStoreSettingTimeoutsOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.value"></a>

```go
func Value() GoogleDataflowConfigStoreSettingValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference">GoogleDataflowConfigStoreSettingValueOutputReference</a>

---

##### `ConfigStoreSettingIdInput`<sup>Optional</sup> <a name="ConfigStoreSettingIdInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingIdInput"></a>

```go
func ConfigStoreSettingIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.valueInput"></a>

```go
func ValueInput() GoogleDataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---

##### `ConfigStoreSettingId`<sup>Required</sup> <a name="ConfigStoreSettingId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.configStoreSettingId"></a>

```go
func ConfigStoreSettingId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowConfigStoreSettingConfig <a name="GoogleDataflowConfigStoreSettingConfig" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

&googledataflowconfigstoresetting.GoogleDataflowConfigStoreSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigStoreSettingId: *string,
	Location: *string,
	Parent: *string,
	Value: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue,
	DeletionPolicy: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.configStoreSettingId">ConfigStoreSettingId</a></code> | <code>*string</code> | The ID of the config store setting (e.g. 'default_launcher_machine_type'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.location">Location</a></code> | <code>*string</code> | The Dataflow region for the setting (e.g. 'us-central1'). |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent resource in which to create the config store setting. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.value">Value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | value block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigStoreSettingId`<sup>Required</sup> <a name="ConfigStoreSettingId" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.configStoreSettingId"></a>

```go
ConfigStoreSettingId *string
```

- *Type:* *string

The ID of the config store setting (e.g. 'default_launcher_machine_type').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#config_store_setting_id GoogleDataflowConfigStoreSetting#config_store_setting_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The Dataflow region for the setting (e.g. 'us-central1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#location GoogleDataflowConfigStoreSetting#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent resource in which to create the config store setting.

Must be in one of the following formats:

* 'projects/{project_number}' (numeric project number is required)
* 'folders/{folder_id}'
* 'organizations/{organization_id}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#parent GoogleDataflowConfigStoreSetting#parent}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.value"></a>

```go
Value GoogleDataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#value GoogleDataflowConfigStoreSetting#value}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#deletion_policy GoogleDataflowConfigStoreSetting#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#id GoogleDataflowConfigStoreSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingConfig.property.timeouts"></a>

```go
Timeouts GoogleDataflowConfigStoreSettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts">GoogleDataflowConfigStoreSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#timeouts GoogleDataflowConfigStoreSetting#timeouts}

---

### GoogleDataflowConfigStoreSettingTimeouts <a name="GoogleDataflowConfigStoreSettingTimeouts" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

&googledataflowconfigstoresetting.GoogleDataflowConfigStoreSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#create GoogleDataflowConfigStoreSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#delete GoogleDataflowConfigStoreSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#update GoogleDataflowConfigStoreSetting#update}.

---

### GoogleDataflowConfigStoreSettingValue <a name="GoogleDataflowConfigStoreSettingValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

&googledataflowconfigstoresetting.GoogleDataflowConfigStoreSettingValue {
	BoolValue: interface{},
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Represents a string value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#bool_value GoogleDataflowConfigStoreSetting#bool_value}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_dataflow_config_store_setting#string_value GoogleDataflowConfigStoreSetting#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataflowConfigStoreSettingTimeoutsOutputReference <a name="GoogleDataflowConfigStoreSettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.NewGoogleDataflowConfigStoreSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataflowConfigStoreSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataflowConfigStoreSettingValueOutputReference <a name="GoogleDataflowConfigStoreSettingValueOutputReference" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledataflowconfigstoresetting"

googledataflowconfigstoresetting.NewGoogleDataflowConfigStoreSettingValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataflowConfigStoreSettingValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataflowConfigStoreSettingValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataflowConfigStoreSetting.GoogleDataflowConfigStoreSettingValue">GoogleDataflowConfigStoreSettingValue</a>

---



