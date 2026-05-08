# `googleCesExample` Submodule <a name="`googleCesExample` Submodule" id="@cdktn/provider-google-beta.googleCesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesExample <a name="GoogleCesExample" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExample(Construct Scope, string Id, GoogleCesExampleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig">GoogleCesExampleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig">GoogleCesExampleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent">ResetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMessages` <a name="PutMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages"></a>

```csharp
private void PutMessages(IResolvable|GoogleCesExampleMessages[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCesExampleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEntryAgent` <a name="ResetEntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent"></a>

```csharp
private void ResetEntryAgent()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages"></a>

```csharp
private void ResetMessages()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesExample.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesExample.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesExample.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesExample.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesExample to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid">Invalid</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput">AppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput">EntryAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput">ExampleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput">MessagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app">App</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent">EntryAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId">ExampleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid"></a>

```csharp
public IResolvable Invalid { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages"></a>

```csharp
public GoogleCesExampleMessagesList Messages { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts"></a>

```csharp
public GoogleCesExampleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput"></a>

```csharp
public string AppInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntryAgentInput`<sup>Optional</sup> <a name="EntryAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput"></a>

```csharp
public string EntryAgentInput { get; }
```

- *Type:* string

---

##### `ExampleIdInput`<sup>Optional</sup> <a name="ExampleIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput"></a>

```csharp
public string ExampleIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput"></a>

```csharp
public IResolvable|GoogleCesExampleMessages[] MessagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCesExampleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app"></a>

```csharp
public string App { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntryAgent`<sup>Required</sup> <a name="EntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent"></a>

```csharp
public string EntryAgent { get; }
```

- *Type:* string

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId"></a>

```csharp
public string ExampleId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesExampleConfig <a name="GoogleCesExampleConfig" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string App,
    string DisplayName,
    string ExampleId,
    string Location,
    string Description = null,
    string EntryAgent = null,
    string Id = null,
    IResolvable|GoogleCesExampleMessages[] Messages = null,
    string Project = null,
    GoogleCesExampleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app">App</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId">ExampleId</a></code> | <code>string</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description">Description</a></code> | <code>string</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent">EntryAgent</a></code> | <code>string</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages">Messages</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app"></a>

```csharp
public string App { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId"></a>

```csharp
public string ExampleId { get; set; }
```

- *Type:* string

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `EntryAgent`<sup>Optional</sup> <a name="EntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent"></a>

```csharp
public string EntryAgent { get; set; }
```

- *Type:* string

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages"></a>

```csharp
public IResolvable|GoogleCesExampleMessages[] Messages { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts"></a>

```csharp
public GoogleCesExampleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

### GoogleCesExampleMessages <a name="GoogleCesExampleMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessages {
    IResolvable|GoogleCesExampleMessagesChunks[] Chunks = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks">Chunks</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role">Role</a></code> | <code>string</code> | The role within the conversation, e.g., user, agent. |

---

##### `Chunks`<sup>Optional</sup> <a name="Chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks"></a>

```csharp
public IResolvable|GoogleCesExampleMessagesChunks[] Chunks { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#chunks GoogleCesExample#chunks}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#role GoogleCesExample#role}

---

### GoogleCesExampleMessagesChunks <a name="GoogleCesExampleMessagesChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunks {
    GoogleCesExampleMessagesChunksAgentTransfer AgentTransfer = null,
    GoogleCesExampleMessagesChunksImage Image = null,
    string Text = null,
    GoogleCesExampleMessagesChunksToolCall ToolCall = null,
    GoogleCesExampleMessagesChunksToolResponse ToolResponse = null,
    string UpdatedVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text">Text</a></code> | <code>string</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables">UpdatedVariables</a></code> | <code>string</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer"></a>

```csharp
public GoogleCesExampleMessagesChunksAgentTransfer AgentTransfer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#agent_transfer GoogleCesExample#agent_transfer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image"></a>

```csharp
public GoogleCesExampleMessagesChunksImage Image { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#image GoogleCesExample#image}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#text GoogleCesExample#text}

---

##### `ToolCall`<sup>Optional</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCall ToolCall { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#tool_call GoogleCesExample#tool_call}

---

##### `ToolResponse`<sup>Optional</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponse ToolResponse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#tool_response GoogleCesExample#tool_response}

---

##### `UpdatedVariables`<sup>Optional</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables"></a>

```csharp
public string UpdatedVariables { get; set; }
```

- *Type:* string

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#updated_variables GoogleCesExample#updated_variables}

---

### GoogleCesExampleMessagesChunksAgentTransfer <a name="GoogleCesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksAgentTransfer {
    string TargetAgent
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>string</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```csharp
public string TargetAgent { get; set; }
```

- *Type:* string

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}

---

### GoogleCesExampleMessagesChunksImage <a name="GoogleCesExampleMessagesChunksImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksImage {
    string Data,
    string MimeType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data">Data</a></code> | <code>string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType">MimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#data GoogleCesExample#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}

---

### GoogleCesExampleMessagesChunksToolCall <a name="GoogleCesExampleMessagesChunksToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolCall {
    string Args = null,
    string Id = null,
    string Tool = null,
    GoogleCesExampleMessagesChunksToolCallToolsetTool ToolsetTool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args">Args</a></code> | <code>string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id">Id</a></code> | <code>string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool">Tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args"></a>

```csharp
public string Args { get; set; }
```

- *Type:* string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#args GoogleCesExample#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool"></a>

```csharp
public string Tool { get; set; }
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCallToolsetTool ToolsetTool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolCallToolsetTool <a name="GoogleCesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolCallToolsetTool {
    string Toolset,
    string ToolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset">Toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId">ToolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```csharp
public string Toolset { get; set; }
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleMessagesChunksToolResponse <a name="GoogleCesExampleMessagesChunksToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolResponse {
    string Response,
    string Id = null,
    string Tool = null,
    GoogleCesExampleMessagesChunksToolResponseToolsetTool ToolsetTool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response">Response</a></code> | <code>string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id">Id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool">Tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#response GoogleCesExample#response}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool"></a>

```csharp
public string Tool { get; set; }
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponseToolsetTool ToolsetTool { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolResponseToolsetTool <a name="GoogleCesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolResponseToolsetTool {
    string Toolset,
    string ToolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```csharp
public string Toolset { get; set; }
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleTimeouts <a name="GoogleCesExampleTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#create GoogleCesExample#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#update GoogleCesExample#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#create GoogleCesExample#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_example#update GoogleCesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesExampleMessagesChunksAgentTransferOutputReference <a name="GoogleCesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksAgentTransferOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```csharp
public string TargetAgentInput { get; }
```

- *Type:* string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```csharp
public string TargetAgent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```csharp
public GoogleCesExampleMessagesChunksAgentTransfer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---


### GoogleCesExampleMessagesChunksImageOutputReference <a name="GoogleCesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```csharp
public GoogleCesExampleMessagesChunksImage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---


### GoogleCesExampleMessagesChunksList <a name="GoogleCesExampleMessagesChunksList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get"></a>

```csharp
private GoogleCesExampleMessagesChunksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesExampleMessagesChunks[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

---


### GoogleCesExampleMessagesChunksOutputReference <a name="GoogleCesExampleMessagesChunksOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall">PutToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse">PutToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall">ResetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse">ResetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables">ResetUpdatedVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```csharp
private void PutAgentTransfer(GoogleCesExampleMessagesChunksAgentTransfer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `PutImage` <a name="PutImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage"></a>

```csharp
private void PutImage(GoogleCesExampleMessagesChunksImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `PutToolCall` <a name="PutToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall"></a>

```csharp
private void PutToolCall(GoogleCesExampleMessagesChunksToolCall Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `PutToolResponse` <a name="PutToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse"></a>

```csharp
private void PutToolResponse(GoogleCesExampleMessagesChunksToolResponse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```csharp
private void ResetAgentTransfer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetToolCall` <a name="ResetToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall"></a>

```csharp
private void ResetToolCall()
```

##### `ResetToolResponse` <a name="ResetToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```csharp
private void ResetToolResponse()
```

##### `ResetUpdatedVariables` <a name="ResetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```csharp
private void ResetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput">ToolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput">ToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput">UpdatedVariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables">UpdatedVariables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```csharp
public GoogleCesExampleMessagesChunksAgentTransferOutputReference AgentTransfer { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image"></a>

```csharp
public GoogleCesExampleMessagesChunksImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a>

---

##### `ToolCall`<sup>Required</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCallOutputReference ToolCall { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a>

---

##### `ToolResponse`<sup>Required</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponseOutputReference ToolResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```csharp
public GoogleCesExampleMessagesChunksAgentTransfer AgentTransferInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput"></a>

```csharp
public GoogleCesExampleMessagesChunksImage ImageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `ToolCallInput`<sup>Optional</sup> <a name="ToolCallInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCall ToolCallInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `ToolResponseInput`<sup>Optional</sup> <a name="ToolResponseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponse ToolResponseInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `UpdatedVariablesInput`<sup>Optional</sup> <a name="UpdatedVariablesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```csharp
public string UpdatedVariablesInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `UpdatedVariables`<sup>Required</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```csharp
public string UpdatedVariables { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesExampleMessagesChunks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>

---


### GoogleCesExampleMessagesChunksToolCallOutputReference <a name="GoogleCesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolCallOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```csharp
private void PutToolsetTool(GoogleCesExampleMessagesChunksToolCallToolsetTool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```csharp
private void ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```csharp
private void ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput">ArgsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput">ToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args">Args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool">Tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference ToolsetTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```csharp
public string ArgsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```csharp
public string ToolInput { get; }
```

- *Type:* string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCallToolsetTool ToolsetToolInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```csharp
public string Args { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```csharp
public string Tool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCall InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---


### GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```csharp
private void ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```csharp
public string ToolsetInput { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```csharp
public string Toolset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```csharp
public GoogleCesExampleMessagesChunksToolCallToolsetTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---


### GoogleCesExampleMessagesChunksToolResponseOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```csharp
private void PutToolsetTool(GoogleCesExampleMessagesChunksToolResponseToolsetTool Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```csharp
private void ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```csharp
private void ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool">Tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference ToolsetTool { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```csharp
public string ToolInput { get; }
```

- *Type:* string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponseToolsetTool ToolsetToolInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```csharp
public string Tool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---


### GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```csharp
private void ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```csharp
public string ToolsetInput { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```csharp
public string Toolset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```csharp
public GoogleCesExampleMessagesChunksToolResponseToolsetTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---


### GoogleCesExampleMessagesList <a name="GoogleCesExampleMessagesList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get"></a>

```csharp
private GoogleCesExampleMessagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesExampleMessages[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>[]

---


### GoogleCesExampleMessagesOutputReference <a name="GoogleCesExampleMessagesOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleMessagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks">PutChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks">ResetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChunks` <a name="PutChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks"></a>

```csharp
private void PutChunks(IResolvable|GoogleCesExampleMessagesChunks[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

---

##### `ResetChunks` <a name="ResetChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks"></a>

```csharp
private void ResetChunks()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks">Chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput">ChunksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks"></a>

```csharp
public GoogleCesExampleMessagesChunksList Chunks { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a>

---

##### `ChunksInput`<sup>Optional</sup> <a name="ChunksInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput"></a>

```csharp
public IResolvable|GoogleCesExampleMessagesChunks[] ChunksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesExampleMessages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>

---


### GoogleCesExampleTimeoutsOutputReference <a name="GoogleCesExampleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesExampleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesExampleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---



