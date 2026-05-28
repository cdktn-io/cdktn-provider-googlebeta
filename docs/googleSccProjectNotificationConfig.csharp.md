# `googleSccProjectNotificationConfig` Submodule <a name="`googleSccProjectNotificationConfig` Submodule" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccProjectNotificationConfig <a name="GoogleSccProjectNotificationConfig" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config google_scc_project_notification_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSccProjectNotificationConfig(Construct Scope, string Id, GoogleSccProjectNotificationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig">GoogleSccProjectNotificationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig">GoogleSccProjectNotificationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.putStreamingConfig">PutStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamingConfig` <a name="PutStreamingConfig" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.putStreamingConfig"></a>

```csharp
private void PutStreamingConfig(GoogleSccProjectNotificationConfigStreamingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSccProjectNotificationConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSccProjectNotificationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSccProjectNotificationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSccProjectNotificationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSccProjectNotificationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleSccProjectNotificationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleSccProjectNotificationConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccProjectNotificationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccProjectNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSccProjectNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.streamingConfig">StreamingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference">GoogleSccProjectNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference">GoogleSccProjectNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.streamingConfigInput">StreamingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `StreamingConfig`<sup>Required</sup> <a name="StreamingConfig" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.streamingConfig"></a>

```csharp
public GoogleSccProjectNotificationConfigStreamingConfigOutputReference StreamingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference">GoogleSccProjectNotificationConfigStreamingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.timeouts"></a>

```csharp
public GoogleSccProjectNotificationConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference">GoogleSccProjectNotificationConfigTimeoutsOutputReference</a>

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `StreamingConfigInput`<sup>Optional</sup> <a name="StreamingConfigInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.streamingConfigInput"></a>

```csharp
public GoogleSccProjectNotificationConfigStreamingConfig StreamingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleSccProjectNotificationConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a>

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccProjectNotificationConfigConfig <a name="GoogleSccProjectNotificationConfigConfig" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSccProjectNotificationConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigId,
    string PubsubTopic,
    GoogleSccProjectNotificationConfigStreamingConfig StreamingConfig,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    string Project = null,
    GoogleSccProjectNotificationConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.configId">ConfigId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.streamingConfig">StreamingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.description">Description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#id GoogleSccProjectNotificationConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#project GoogleSccProjectNotificationConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#config_id GoogleSccProjectNotificationConfig#config_id}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#pubsub_topic GoogleSccProjectNotificationConfig#pubsub_topic}

---

##### `StreamingConfig`<sup>Required</sup> <a name="StreamingConfig" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.streamingConfig"></a>

```csharp
public GoogleSccProjectNotificationConfigStreamingConfig StreamingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#streaming_config GoogleSccProjectNotificationConfig#streaming_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#deletion_policy GoogleSccProjectNotificationConfig#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#description GoogleSccProjectNotificationConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#id GoogleSccProjectNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#project GoogleSccProjectNotificationConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigConfig.property.timeouts"></a>

```csharp
public GoogleSccProjectNotificationConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#timeouts GoogleSccProjectNotificationConfig#timeouts}

---

### GoogleSccProjectNotificationConfigStreamingConfig <a name="GoogleSccProjectNotificationConfigStreamingConfig" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSccProjectNotificationConfigStreamingConfig {
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig.property.filter">Filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#filter GoogleSccProjectNotificationConfig#filter}

---

### GoogleSccProjectNotificationConfigTimeouts <a name="GoogleSccProjectNotificationConfigTimeouts" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSccProjectNotificationConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#create GoogleSccProjectNotificationConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#delete GoogleSccProjectNotificationConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#update GoogleSccProjectNotificationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#create GoogleSccProjectNotificationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#delete GoogleSccProjectNotificationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_project_notification_config#update GoogleSccProjectNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccProjectNotificationConfigStreamingConfigOutputReference <a name="GoogleSccProjectNotificationConfigStreamingConfigOutputReference" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSccProjectNotificationConfigStreamingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleSccProjectNotificationConfigStreamingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigStreamingConfig">GoogleSccProjectNotificationConfigStreamingConfig</a>

---


### GoogleSccProjectNotificationConfigTimeoutsOutputReference <a name="GoogleSccProjectNotificationConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleSccProjectNotificationConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleSccProjectNotificationConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSccProjectNotificationConfig.GoogleSccProjectNotificationConfigTimeouts">GoogleSccProjectNotificationConfigTimeouts</a>

---



